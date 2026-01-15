const menuData = [
  {
    group: "NAIL",
    items: [
      { name: "Cắt da + dũa form", price: 15 },
      { name: "Úp móng keo", price: 40 },
      { name: "Úp móng base", price: 60 },
      { name: "Phá móng úp", price: 20 },
      { name: "Sơn thường", price: 20 },
      { name: "Sơn gel", price: 40 },
      { name: "Sơn thạch", price: 50 },
      { name: "Sơn mắt mèo", price: 60 },
      { name: "Sơn nhũ fash", price: 50 },
      { name: "Sơn + french", price: 50 },
      { name: "Tráng gương", price: 60 },
      { name: "Ombre + lông đào", price: 60 },
      { name: "Vân đá", price: 60 },
    ],
  },
  {
    group: "TRANG TRÍ",
    items: [
      { name: "French đầu móng", price: 5 },
      { name: "Nhũ fash + ẩn nhũ", price: 5 },
      { name: "Mắt mèo", price: 6 },
      { name: "Tráng gương", price: 6 },
      { name: "Ombre + lông đào", price: 6 },
      { name: "Vân đá", price: 6 },
      { name: "Vẽ hoa", min: 5, max: 20 },
      { name: "Vẽ hoạt hình", min: 5, max: 20 },
      { name: "Nặn hoa", min: 10, max: 20 },
      { name: "Gel nổi", min: 10, max: 20 },
      { name: "Dán sticker", min: 10, max: 20 },
      { name: "Đính đá mini", price: 5 },
      { name: "Đính đá khối", min: 1, max: 5 },
      { name: "Charm nhỏ", min: 5, max: 20 },
      { name: "Charm lớn", min: 5, max: 10 },
    ],
  },
  {
    group: "MI",
    items: [
      { name: "Nối mi classic", min: 80, max: 100 },
      { name: "Nối mi volume", min: 100, max: 120 },
      { name: "Mi lông thỏ", min: 80, max: 120 },
      { name: "Mi thiết kế", min: 120, max: 170 },
      { name: "Uốn mi", price: 50 },
      { name: "Tháo mi", price: 20 },
      { name: "Dặm mi", price: 30 },
    ],
  },
  {
    group: "SPA",
    items: [
      { name: "Massage mặt chuẩn y khoa", price: 59 },
      { name: "Rửa mặt xông hơi", price: 49 },
      { name: "Rửa mặt hút nhờn", price: 49 },
      { name: "Thải chì", price: 59 },
      { name: "Cấy trắng huyết yến", price: 99 },
      { name: "Cấy tảo nano", price: 99 },
      { name: "Cấy hồng sâm", price: 99 },
      { name: "Cấy collagen C/ha", price: 99 },
      { name: "Bắn nốt ruồi + mụn thịt", price: 30 },
      { name: "Đắp nạ ngủ hoa", price: 39 },
      { name: "Đắp nạ bạc hà", price: 39 },
      { name: "Đắp nạ mầm gạo non", price: 39 },
      { name: "Đắp nạ vàng nano", price: 39 },
      { name: "Đắp nạ huyết hoa hồng", price: 39 },
      { name: "Combo rửa mặt + xông hơi + thải chì", price: 79 },
    ],
  },
  {
    group: "GỘI",
    items: [
      { name: "Gội thường", price: 25 },
      { name: "Gội + rửa mặt", price: 30 },
      { name: "Gội + rm + tẩy da chết", price: 40 },
      { name: "Gội massage thư giãn 60 phút", price: 49 },
      { name: "Sữa rửa mặt", price: 10 },
      { name: "Đắp nạ thường", price: 10 },
      { name: "Cạo mặt", price: 10 },
      { name: "Lột mụn", price: 20 },
      { name: "Combo 6 bước", price: 49 },
    ],
  },
  {
    group: "MAKEUP",
    items: [
      { name: "Makeup đơn giản", price: 50 },
      { name: "Makeup tiệc", min: 100, max: 200 },
      { name: "Makeup cô dâu", min: 400, max: 1000 },
      { name: "Làm tóc theo yêu cầu", min: 20, max: 100 },
    ],
  },
  {
    group: "HAIR",
    items: [
      { name: "Cắt mái", price: 19 },
      { name: "Cắt tạo kiểu", min: 19, max: 39 },
      { name: "Uốn tóc ngắn", min: 49, max: 99 },
      { name: "Uốn tóc dài", min: 99, max: 499 },
      { name: "Duỗi tóc ngắn", min: 149, max: 199 },
      { name: "Duỗi tóc dài", min: 199, max: 399 },
      { name: "Nhuộm", min: 99, max: 199 },
      { name: "Tẩy", min: 99, max: 199 },
      { name: "Highlight", min: 30, max: 199 },
    ],
  },
];

let bill = [];
let lastDeleted = null;

function init() {
  renderMenu();
  syncInfo();
}

function renderMenu() {
  const container = document.getElementById("menu");
  container.innerHTML = "";
  menuData.forEach((group) => {
    container.innerHTML += `<div class="section-title">${group.group}</div>`;
    const grid = document.createElement("div");
    grid.className = "menu-grid";
    group.items.forEach((item) => {
      const billItem = bill.find((i) => i.name === item.name);
      const qty = billItem ? billItem.qty : 0;
      const itemEl = document.createElement("div");
      itemEl.className = "menu-item";
      itemEl.innerHTML = `
                <span class="name">${item.name}</span>
                <span class="price">${
                  item.price || item.min + "-" + item.max
                }</span>
                <div class="controls">
                    <button class="btn-qty" onclick="updateQty('${
                      item.name
                    }', -1, ${item.price || 0}, ${item.min || 0}, ${
        item.max || 0
      })">-</button>
                    <span class="qty-val">${qty}</span>
                    <button class="btn-qty plus" onclick="updateQty('${
                      item.name
                    }', 1, ${item.price || 0}, ${item.min || 0}, ${
        item.max || 0
      })">+</button>
                </div>`;
      grid.appendChild(itemEl);
    });
    container.appendChild(grid);
  });
}

function updateQty(name, delta, price, min, max) {
  let item = bill.find((i) => i.name === name);
  if (delta === 1) {
    if (!item) {
      let p =
        price || parseInt(prompt(`Nhập giá cho ${name} (${min}-${max}k):`));
      if (isNaN(p)) return;
      bill.push({ name: name, price: p, qty: 1 });
    } else {
      item.qty++;
    }
  } else if (item) {
    item.qty--;
    if (item.qty <= 0) {
      lastDeleted = bill.splice(bill.indexOf(item), 1)[0];
    }
  }
  renderMenu();
  renderBill();
}

function renderBill() {
  const container = document.getElementById("billItems");
  container.innerHTML = "";
  let total = 0;

  bill.forEach((item) => {
    const sub = item.price * item.qty;
    total += sub;

    const row = document.createElement("div");
    row.className = "bill-item";
    // SỬA QUAN TRỌNG: Đã xóa class "no-capture" ở đây và thay bằng "bill-controls" để nút hiện ra
    row.innerHTML = `
            <div class="bill-item-info">
                <span class="bill-item-name">${item.name}</span>
                <span class="bill-item-sub">${(
                  item.price * 1000
                ).toLocaleString()}đ / món</span>
            </div>
            <div class="bill-item-right">
                <div class="bill-controls" style="display: flex; align-items: center; gap: 8px;">
                    <button class="btn-qty" style="width:24px; height:24px; line-height:1;" onclick="updateQty('${
                      item.name
                    }', -1)">-</button>
                    <span class="qty-val" style="font-size:14px; min-width:15px; text-align:center;">${
                      item.qty
                    }</span>
                    <button class="btn-qty plus" style="width:24px; height:24px; line-height:1;" onclick="updateQty('${
                      item.name
                    }', 1)">+</button>
                </div>
                <span class="capture-qty-text" style="display:none; color:#aaa; font-weight:bold;">x${
                  item.qty
                }</span>
                <span class="bill-price" style="min-width: 80px; text-align: right;">${(
                  sub * 1000
                ).toLocaleString()}đ</span>
            </div>`;
    container.appendChild(row);
  });

  document.getElementById("total").innerText = (total * 1000).toLocaleString();
  syncInfo();
}

function undoDelete() {
  if (lastDeleted) {
    const exist = bill.find((i) => i.name === lastDeleted.name);
    if (exist) exist.qty++;
    else bill.push(lastDeleted);
    lastDeleted = null;
    renderMenu();
    renderBill();
  }
}

function resetBill() {
  if (confirm("Xoá toàn bộ đơn?")) {
    bill = [];
    renderMenu();
    renderBill();
  }
}

function syncInfo() {
  document.getElementById("pName").innerText =
    "Khách hàng: " + document.getElementById("customerName").value;
  document.getElementById("pPhone").innerText =
    "SĐT: " + document.getElementById("customerPhone").value;
  document.getElementById("pNote").innerText = document.getElementById("note")
    .value
    ? "Ghi chú: " + document.getElementById("note").value
    : "";
  document.getElementById("billDate").innerText =
    "Ngày: " + new Date().toLocaleString("vi-VN");
}

function captureBill() {
  // 1. Tìm các nút điều khiển trong hóa đơn
  const controls = document.querySelectorAll(".bill-controls");
  const qtyTexts = document.querySelectorAll(".capture-qty-text");

  // 2. Ẩn nút, hiện chữ "x Số lượng"
  controls.forEach((el) => (el.style.display = "none"));
  qtyTexts.forEach((el) => (el.style.display = "inline"));

  // 3. Cấu hình chụp ảnh (SỬA QUAN TRỌNG: Thêm useCORS và allowTaint để hiện Logo)
  html2canvas(document.getElementById("billCapture"), {
    backgroundColor: "#1a1a1a",
    scale: 3,
    useCORS: true, // Cho phép tải ảnh từ nguồn khác (quan trọng cho logo)
    allowTaint: true, // Cho phép vẽ ảnh local
  }).then((canvas) => {
    // 4. Hiện lại nút điều khiển sau khi chụp xong
    controls.forEach((el) => (el.style.display = "flex"));
    qtyTexts.forEach((el) => (el.style.display = "none"));

    const img = canvas.toDataURL("image/png");
    const w = window.open("");
    w.document
      .write(`<body style="margin:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;">
            <img src="${img}" style="max-width:95%;border:1px solid #d4af37;border-radius:10px;">
            <button onclick="window.close()" style="margin-top:20px;padding:12px 25px;background:#d4af37;border:none;border-radius:5px;font-weight:bold;color:#000;cursor:pointer;">QUAY LẠI</button>
        </body>`);
  });
}

init();
