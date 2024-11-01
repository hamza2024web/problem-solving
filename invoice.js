document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');



    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal() {
       var val_1 = parseInt(document.getElementById('quantity').value===""?0:document.getElementById("quantity").value);
       var val_2 = parseInt(document.getElementById('unitPrice').value===""?0:document.getElementById("unitPrice").value);
            document.getElementById('itemTotal').innerText = val_1 * val_2;
    }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
    
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
