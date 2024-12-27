// Data for the bull runs
const data = {
    bullRun2017: [
        { purchaseDate: 'Monday, October 5, 2015', btcBuyPrice: 240, sellDate: 'Monday, December 18, 2017', btcSellPrice: 19140 },
        { purchaseDate: 'Monday, February 15, 2016', btcBuyPrice: 407, sellDate: 'Monday, December 18, 2017', btcSellPrice: 19140 },
        { purchaseDate: 'Monday, September 5, 2016', btcBuyPrice: 608, sellDate: 'Monday, December 18, 2017', btcSellPrice: 19140 },
        { purchaseDate: 'Monday, February 6, 2017', btcBuyPrice: 1008, sellDate: 'Monday, December 18, 2017', btcSellPrice: 19140 },
        { purchaseDate: 'Monday, April 10, 2017', btcBuyPrice: 1208, sellDate: 'Monday, December 18, 2017', btcSellPrice: 19140 },
        { purchaseDate: 'Monday, August 7, 2017', btcBuyPrice: 3186, sellDate: 'Monday, December 18, 2017', btcSellPrice: 19140 },
        { purchaseDate: 'Monday, October 2, 2017', btcBuyPrice: 4385, sellDate: 'Monday, December 18, 2017', btcSellPrice: 19140 }
    ],
    bullRun2021: [
        { purchaseDate: 'Monday, February 11, 2019', btcBuyPrice: 3648, sellDate: 'Monday, April 12, 2021', btcSellPrice: 60000 },
        { purchaseDate: 'Monday, January 13, 2020', btcBuyPrice: 8029, sellDate: 'Monday, April 12, 2021', btcSellPrice: 60000 },
        { purchaseDate: 'Monday, May 4, 2020', btcBuyPrice: 8968, sellDate: 'Monday, April 12, 2021', btcSellPrice: 60000 },
        { purchaseDate: 'Monday, October 12, 2020', btcBuyPrice: 11375, sellDate: 'Monday, April 12, 2021', btcSellPrice: 60000 }
    ],
    bullRun2025: [
        { purchaseDate: 'Monday, January 16, 2023', btcBuyPrice: 20877, sellDate: 'Monday, September 1, 2025', btcSellPrice: 150000 },
        { purchaseDate: 'Monday, June 26, 2023', btcBuyPrice: 30280, sellDate: 'Monday, September 1, 2025', btcSellPrice: 150000 },
        { purchaseDate: 'Monday, October 2, 2023', btcBuyPrice: 28037, sellDate: 'Monday, September 1, 2025', btcSellPrice: 150000 },
        { purchaseDate: 'Monday, February 12, 2024', btcBuyPrice: 40823, sellDate: 'Monday, September 1, 2025', btcSellPrice: 150000 },
        { purchaseDate: 'Monday, September 23, 2024', btcBuyPrice: 63600, sellDate: 'Monday, September 1, 2025', btcSellPrice: 150000 }
    ]
};

// Format numbers as currency
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
};

// Update bull run data table
function updateBullRunData(bullRunData, spendAmount, leverage, tableId) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    bullRunData.forEach(item => {
        const totalSpendAmt = spendAmount * leverage;
        const btcBuyQty = totalSpendAmt / item.btcBuyPrice;
        const totalBtcSell = btcBuyQty * item.btcSellPrice;
        const profit = totalBtcSell - totalSpendAmt;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.purchaseDate}</td>
            <td>${formatCurrency(item.btcBuyPrice)}</td>
            <td>${formatCurrency(spendAmount)}</td>
            <td>${leverage}</td>
            <td>${formatCurrency(totalSpendAmt)}</td>
            <td>${btcBuyQty.toFixed(3)}</td>
            <td>${item.sellDate}</td>
            <td>${formatCurrency(item.btcSellPrice)}</td>
            <td>${btcBuyQty.toFixed(3)}</td>
            <td>${formatCurrency(totalBtcSell)}</td>
            <td>${formatCurrency(profit)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Update data based on user input
function updateData() {
    const spendAmount = parseFloat(document.getElementById('spendAmount').value) || 0;
    const leverage = parseFloat(document.getElementById('leverage').value) || 1;
    updateBullRunData(data.bullRun2017, spendAmount, leverage, 'bullRun2017');
    updateBullRunData(data.bullRun2021, spendAmount, leverage, 'bullRun2021');
    updateBullRunData(data.bullRun2025, spendAmount, leverage, 'bullRun2025');
}

// Initialize the data
updateData();
