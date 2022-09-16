// import in the body: <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.3/xlsx.full.min.js"></script> 

function downloadExportJSON2Excel(data, fileName) {
    let myFile = fileName.toString() + '.xlsx';
    let myWorkSheet = XLSX.utils.json_to_sheet(data);
    let myWorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(myWorkBook, myWorkSheet, "myWorkSheet");
    XLSX.writeFile(myWorkBook, myFile);
}