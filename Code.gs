function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
               .getSheetByName("Orders") || 
               SpreadsheetApp.getActiveSpreadsheet()
               .insertSheet("Orders");
  
  // Secure headers
  const response = ContentService.createTextOutput();
  response.setMimeType(ContentService.MimeType.JSON);
  response.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.name,
      data.phone,
      data.items.join(", "),
      data.total,
      "NEW"
    ]);
    return response.setContent(JSON.stringify({success: true}));
  } catch (err) {
    return response.setContent(JSON.stringify({error: err.message}));
  }
}
