# Voxgig SDK Generator Assessment Report

## 1. Overview

- **Selected API:** Todoist API v1.
- **Language:** TypeScript.
- **SDK generator:** Voxgig SDK Generator, created with `@voxgig/create-sdkgen@0.30.8` and generated with `@voxgig/sdkgen@4.35.0`.
- **Repository URL:** https://github.com/rizwan6566-dev/voxgig-todoist-sdk (created by the repository owner; local publishing is pending).

Todoist was selected because its developer platform is free for Todoist accounts, its API documentation is generated from an OpenAPI 3.1 definition, it has a simple bearer-token path for personal use, and it offers useful task and project endpoints. A review of the public `voxgig-sdk` catalogue (804 repositories when checked), followed by its GitHub repository search for `todoist`, returned zero matches.

## 2. Development Process

1. Read the Voxgig SDK generator guide and its repository quick start. The documented workflow is to scaffold from an OpenAPI definition, add a language target, generate, build, and test.
2. Retrieved Todoist’s official developer documentation and extracted the embedded OpenAPI 3.1 definition into `.sdk/def/todoist-v1.openapi.json`. The input contains 78 paths and 108 operations.
3. Ran the official generator:

   ```bash
   npm create @voxgig/sdkgen@latest -- todoist-voxgig-sdk \
     -d /tmp/todoist-v1.openapi.json -o ./todoist-voxgig-sdk
   cd todoist-voxgig-sdk/.sdk
   npx voxgig-sdkgen target add ts
   npm run generate
   ```

4. Kept project-specific decisions in `.sdk/model/`, rather than editing generated TypeScript output. The project model enables Todoist bearer authentication because the published definition documents bearer authentication in prose/examples but does not declare a reusable OpenAPI security scheme. After the repository was named, `voxgig-sdkgen package update @voxgig/sdkgen --no-fetch` refreshed stale copied templates before regeneration.
5. Added `.env.example` and `examples/basic.cjs`. The example reads `TODOIST_API_TOKEN`, calls `GET /api/v1/projects` and `GET /api/v1/tasks`, and reports non-successful results. `.env` is ignored by Git; `.env.example` contains no credential.

## 3. Developer Experience

### Ease of getting started

The documented scaffold → target → generate sequence worked without an interactive setup. The generator copied its model, templates, and components into the repository, making regeneration and inspection straightforward.

### Documentation clarity

The Voxgig agent guide clearly distinguished project model files from generated output and supplied a short end-to-end command sequence. The Todoist documentation exposed its complete specification in the rendered documentation, although it was not linked as a standalone downloadable file in the path used here.

### Generator usability and output quality

The TypeScript target generated typed entity models, entity operations, `direct()` and `prepare()` escape hatches, README/REFERENCE files, mock transport support, and an offline test suite. `voxgig-sdkgen doctor` reported that `.sdk` matches the scaffold with zero additive drift.

### Configuration experience

The generated client accepts `apikey`; the model configuration maps it to `Authorization: Bearer <token>`. A mock-transport check verified that the generated base URL is `https://api.todoist.com/` and the request header is sent correctly. The SDK itself intentionally does not load environment files; the example reads `TODOIST_API_TOKEN` from the process environment.

## 4. Issues and Limitations

- The current environment runs Node.js 22.23.3. npm emitted engine warnings because `@voxgig/sdkgen@4.35.0` and some dependencies request Node.js 24 or later. Generation, build, tests, and `doctor` still completed successfully. Use Node.js 24+ for a warning-free supported toolchain.
- Renaming the scaffold after its first generation initially left stale copied TypeScript templates that referenced the old SDK class name, causing a build failure. `voxgig-sdkgen package update @voxgig/sdkgen --no-fetch` refreshed 13 unchanged copies from the locally installed generator; regenerating then restored a passing build and test suite.
- The Todoist OpenAPI definition did not declare `components.securitySchemes`. Its prose and curl examples specify bearer authentication, so a project-level correction was added in `.sdk/model/project.aontu`.
- Voxgig’s OpenAPI import reported six selector ambiguities for same-shaped Todoist mutation paths (for example, task update versus task move). The generated client retains the affected routes where distinguishable; use `direct()` for ambiguous mutation endpoints until the guide/model is refined.
- No live Todoist request was executed because no user API token was supplied. The test results below do not claim live API validation.
- The generator’s scaffold initially used the `voxgig-sdk` catalogue convention. The project identity and generated package metadata were then changed to `rizwan6566-dev/voxgig-todoist-sdk`; npm publishing remains intentionally unconfigured.

## 5. Suggestions for Voxgig

1. Surface the Node.js version requirement before scaffold installation, so users on Node.js 22 see a clear prerequisite instead of dependency-engine warnings.
2. In the import summary, group selector warnings with a concrete generated-model remediation example for action endpoints.
3. Consider offering an optional inspection pass that recognizes documented bearer authentication when the source OpenAPI definition omits `securitySchemes`, while still requiring user confirmation before applying it.

## 6. Testing Results

| Check | Result | Notes |
| --- | --- | --- |
| Official scaffold | Passed | `@voxgig/create-sdkgen@0.30.8` completed. |
| TypeScript target generation | Passed with importer warnings | Generated 51 entities from 108 routes; six selector ambiguities reported. |
| `ts/npm install` | Passed | 3 packages installed; npm reported no vulnerabilities. |
| `ts/npm run build` | Passed | TypeScript compiled source and tests. |
| `ts/npm test` | Passed | Generated offline unit suite passed, including definition routes, mock transport, README example, and credential-cleaning tests. |
| Bearer authentication configuration | Passed (mock) | Verified generated client used Todoist base URL and `Authorization: Bearer verification-token`. |
| Live Todoist projects/tasks calls | Not tested | Requires `TODOIST_API_TOKEN`; no token was requested or supplied. |
| `voxgig-sdkgen doctor` | Passed | `.sdk matches the scaffold (0 additive)`. |

## 7. Time Spent

The workspace does not record human authoring time, so no human duration is inferred or claimed. Observed automated command execution for specification retrieval, scaffolding, generation, dependency installation, build, tests, and doctor was approximately two minutes, excluding analysis/reading time and user review. This should not be presented as human effort; the assessment owner should add their own measured human time before submission.

## 8. Conclusion

Voxgig successfully generated a maintainable TypeScript Todoist SDK and an extensive offline test suite from the public OpenAPI definition. The workflow was direct and regeneration-safe. The practical gaps were the Node.js version warning, missing machine-readable bearer-auth declaration in the source specification, and a small set of same-shape Todoist mutation routes that need explicit model actions.
