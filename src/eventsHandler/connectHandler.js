import { appendFile } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';

// Get the Downloads folder path
const downloadsFolder = join(homedir(), 'Downloads');
const logFilePath = join(downloadsFolder, 'rdpDetails.txt');

// Get the current date and time
const currentDateTime = new Date().toLocaleString();

// Log message
const logMessage = `RDP Connection: ${currentDateTime}\n`;

// Write to the log file
try {
    await appendFile(logFilePath, logMessage);
    console.log('RDP connection logged');
} catch (err) {
    console.error('Error writing to log file', err);
}
