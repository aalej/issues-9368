# Repro for issue 9368

## Versions

firebase-tools: v14.21.0

## Steps to reproduce

1. Run `firebase functions:secrets:set SECRET_MESSAGE`
   - Create a secret message
2. Run `firebase deploy --only functions --non-interactive --project PROJECT_ID`

```
$ firebase --version
14.21.0
$ firebase deploy --only functions --non-interactive

=== Deploying to 'PROJECT_ID'...

i  deploying functions
i  functions: preparing codebase default for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8192

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...

Error: In non-interactive mode but have no value for the following secrets: SECRET_MESSAGE
```

## Notes

Issue is not reproducible on firebase-tools v14.20.0

1. Run `firebase deploy --only functions --non-interactive --project PROJECT_ID`

```
$ firebase --version
14.20.0
$ firebase deploy --only functions --non-interactive

=== Deploying to 'PROJECT_ID'...

i  deploying functions
i  functions: preparing codebase default for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8333

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
i  functions: preparing functions directory for uploading...
i  functions: packaged /Users/user/Desktop/firebase-tools/issues/9368/functions (68.22 KB) for uploading
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
i  functions: ensuring required API secretmanager.googleapis.com is enabled...
i  functions: ensuring 769244627687-compute@developer.gserviceaccount.com access to secret SECRET_MESSAGE.
✔  secretmanager: Granted roles/secretmanager.secretAccessor on projects/PROJECT_ID/secrets/SECRET_MESSAGE to 769244627687-compute@developer.gserviceaccount.com
✔  functions: ensured 769244627687-compute@developer.gserviceaccount.com access to SECRET_MESSAGE.
✔  functions: functions source uploaded successfully
i  functions: creating Node.js 22 (2nd Gen) function helloWorld(us-central1)...
✔  functions[helloWorld(us-central1)] Successful create operation.
Function URL (helloWorld(us-central1)): https://us-central1-PROJECT_ID.cloudfunctions.net/helloWorld

✔  Deploy complete!
$ curl https://us-central1-PROJECT_ID.cloudfunctions.net/helloWorld
Hello from Firebase!
 The secret message is: shhhh... the secret is ... i forgot it :(
```
