const fs = require('fs');
const path = require('path');
const dir = './';
const extensions = ['.js', '.ts', '.jsx', '.tsx', '.json', '.md', '.css', '.html'];
function convertLineEndings(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/\n/g, '\r\n'); // Convert LF to CRLF
    fs.writeFileSync(filePath, newContent, 'utf8');
}

function walkDir(currentPath) {
    fs.readdirSync(currentPath).forEach((file) => {
        const filePath = path.join(currentPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else {
            const ext = path.extname(file);
            if (extensions.includes(ext)) {
                console.log(`Converting: ${filePath}`);
                convertLineEndings(filePath);
            }
        }
    });
}
walkDir(dir);