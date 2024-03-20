package com.example.Portfolio.Controller;

import com.example.Portfolio.Service.FirebaseStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@RestController
@RequestMapping("/api/upload")
public class FileUploadController {
    private final FirebaseStorageService firebaseStorageService;

    @Autowired
    public FileUploadController(FirebaseStorageService firebaseStorageService) {
        this.firebaseStorageService = firebaseStorageService;
    }

    @PostMapping
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String fileUrl = firebaseStorageService.uploadFile(file);
            return ResponseEntity.ok(fileUrl);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file");
        }
    }
}