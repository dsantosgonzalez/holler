// const { PythonShell } = require('python-shell')
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const PORT = 4040;

// const upload = multer({ dest: 'uploads/' });

// app.post('/analyze', upload.single('image'), (req, res) => {
//     const description = req.body.description;
//     const imagePath = req.file.path;

//     let options = {
//         scriptPath: "./backend/models/watsonx.ai",
//         args: [description, imagePath]
//     };git 

//     PythonShell.run("watsonx.ai.ipynb", options, (err, result) => {
//       console.writeline("we have gotten to this point")
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Error running Python script' });
//         }
//         res.json({ result });
        
//         fs.unlink(imagePath, (unlinkErr) => {
//             if (unlinkErr) console.error("Error deleting file:", unlinkErr);
//         });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
