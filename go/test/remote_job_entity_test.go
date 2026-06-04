package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/go"
	"github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/go/core"

	vs "github.com/voxgig-sdk/remote-jobs-api-rss-feed-sdk/go/utility/struct"
)

func TestRemoteJobEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RemoteJob(nil)
		if ent == nil {
			t.Fatal("expected non-nil RemoteJobEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := remote_jobBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "remote_job." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set REMOTEJOBSAPIRSSFEED_TEST_REMOTE_JOB_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		remoteJobRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.remote_job", setup.data)))
		var remoteJobRef01Data map[string]any
		if len(remoteJobRef01DataRaw) > 0 {
			remoteJobRef01Data = core.ToMapAny(remoteJobRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = remoteJobRef01Data

		// LIST
		remoteJobRef01Ent := client.RemoteJob(nil)
		remoteJobRef01Match := map[string]any{}

		remoteJobRef01ListResult, err := remoteJobRef01Ent.List(remoteJobRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, remoteJobRef01ListOk := remoteJobRef01ListResult.([]any)
		if !remoteJobRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", remoteJobRef01ListResult)
		}

	})
}

func remote_jobBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "remote_job", "RemoteJobTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read remote_job test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse remote_job test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"remote_job01", "remote_job02", "remote_job03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("REMOTEJOBSAPIRSSFEED_TEST_REMOTE_JOB_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"REMOTEJOBSAPIRSSFEED_TEST_REMOTE_JOB_ENTID": idmap,
		"REMOTEJOBSAPIRSSFEED_TEST_LIVE":      "FALSE",
		"REMOTEJOBSAPIRSSFEED_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["REMOTEJOBSAPIRSSFEED_TEST_REMOTE_JOB_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["REMOTEJOBSAPIRSSFEED_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewRemoteJobsApiRssFeedSDK(core.ToMapAny(mergedOpts))
	}

	live := env["REMOTEJOBSAPIRSSFEED_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["REMOTEJOBSAPIRSSFEED_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
