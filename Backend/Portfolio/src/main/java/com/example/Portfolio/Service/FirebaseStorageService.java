package com.example.Portfolio.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.*;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.UUID;
@Service
public class FirebaseStorageService {
    private final String BUCKET_NAME = "bel-news-99264.appspot.com";

    public String uploadFile(MultipartFile file) throws IOException {
        InputStream inputStream = file.getInputStream();
        String fileName = file.getOriginalFilename();

        Storage storage = StorageOptions.newBuilder()
                .setCredentials(GoogleCredentials.fromStream(getClass().getResourceAsStream("/firebase-key.json")))
                .build()
                .getService();
        BlobId blobId = BlobId.of(BUCKET_NAME, fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
        Blob blob = storage.create(blobInfo, inputStream);

        // Make the file publicly accessible
        BlobInfo updatedBlobInfo = blob.toBuilder().setAcl(new ArrayList<>(Arrays.asList(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER)))).build();
        storage.update(updatedBlobInfo);

        return blob.getMediaLink();
    }
}