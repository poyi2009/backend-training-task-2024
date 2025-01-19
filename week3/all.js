// 題目 - 樂呵呵健身房
//會員名單
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

// 第一階段：新增課程購買記錄（優惠定價）
//優惠單價判斷
function checkPrice(purchasedQty){
    if(purchasedQty <= 10){
        return 1500
    }else if(purchasedQty > 10 && purchasedQty <= 20){
        return 1300
    }else{
        return 1100
    }
}

let purchaseRecords = [];
//新增課程購買紀錄(搭配優惠價)
function addPurchaseRecord(name, purchasedQty){
    if(name === "" || members.includes(name) === false || typeof purchasedQty !== "number" || purchasedQty < 1 || purchasedQty % 1 !== 0){
        //姓名為空、非會員、堂數不為數字型別、堂數小於1、堂數不為整數
        console.log(`輸入錯誤，請輸入有效的會員名稱和課程數量。`);
    }else{
        let order = {};
        order.name = name;
        order.purchasedQty = purchasedQty;
        order.price = checkPrice(purchasedQty);
        order.total = purchasedQty * order.price;
        purchaseRecords.push(order);
        console.log(`新增購買記錄成功！會員 ${name} 購買 ${purchasedQty} 堂課，總金額為 ${order.total} 元。`);
    }
}
addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");


// 第二階段：計算目前的總營業額
function calculateTotalPrice(){
    let totalPrice = 0;
    purchaseRecords.forEach(function(item){
        totalPrice += item.total;
    })
    console.log(`目前總營業額為 ${totalPrice} 元`);
}
calculateTotalPrice();


// 第三階段：篩選出還沒有購課的會員
function filterNoPurchaseMember(){
    const purchasedMemberSet = new Set(); //宣告已購課會員名單為set
    purchaseRecords.forEach(function(item){
        purchasedMemberSet.add(item.name); //將購課會員姓名不重複地存入
    })
    const notPurchased = members.filter(function(member){ //篩選會員姓名
        return  purchasedMemberSet.has(member) === false;//回傳不存在已購課會員名單set裡的會員姓名
    })
    console.log(`未購買課程的會員有${notPurchased}`);
}
filterNoPurchaseMember();