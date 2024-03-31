# Firebase Configuration

## Authentication

Configure Firebase Authentication to allow users to sign in using:

- Google
- Email/Password

## Cloud Firestore

Set up Cloud Firestore to store recipe data with the following structure:

- Collection: **recipes**
- Document Fields:

  - **author**: User UID
  - **title**: Title of the recipe
  - **category**: Category of the recipe
  - **publishDate**: Date of publication
  - **directions**: Recipe directions
  - **ingredients**: Ingredients list
  - **imageUrl**: URL for recipe image
  - **timeStamp**: Server timestamp for record creation

- No specific security rules are set yet for Cloud Firestore.

```javascript
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write
    }
  }
}
```

## Cloud Storage

- Configure Cloud Storage to store recipe images under the **recipe/** directory.
- No specific security rules are set yet for Cloud Storage.

```javascript
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write
    }
  }
}
```
