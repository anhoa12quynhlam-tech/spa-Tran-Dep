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
      { name: "Đính đá mini", min: 1, max: 5 },
      { name: "Đính đá khối", min: 5, max: 20 },
      { name: "Charm nhỏ", price: 5 },
      { name: "Charm lớn", min: 5, max: 20 },
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

// --- TÍNH NĂNG MỚI: TÌM KIẾM ---
function filterMenu() {
  const query = document.getElementById("menuSearch").value.toLowerCase();
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".accordion-item");

  menuItems.forEach((item) => {
    const text = item.querySelector("div:first-child").innerText.toLowerCase();
    if (text.includes(query)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });

  if (query.length > 0) {
    sections.forEach((s) => s.classList.add("active"));
  }
}

// --- RENDER MENU GỐC ---
function renderMenu() {
  const m = document.getElementById("menu");
  m.innerHTML = "";
  menuData.forEach((g) => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.innerHTML = `<h2 class="gold-glow" style="margin:0; font-size:20px;">${g.group}</h2>`;

    header.onclick = () => {
      document.querySelectorAll(".accordion-item").forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });
      item.classList.toggle("active");
    };

    const content = document.createElement("div");
    content.className = "accordion-content";

    g.items.forEach((i) => {
      const d = document.createElement("div");
      d.className = "menu-item";
      const billItem = bill.find((b) => b.name === i.name);
      const qty = billItem ? billItem.qty : 0;

      d.innerHTML = `
        <div style="flex:1">
            <div style="font-size:18px">${i.name}</div>
            <div style="color:#d4af37; font-size:12px">${
              i.price ?? i.min + "-" + i.max
            }k</div>
        </div>
        <div class="qty-controls">
            <button class="btn-qty" onclick="updateQty('${i.name}', -1, ${
        i.price || 0
      }, ${i.min || 0}, ${i.max || 0})">-</button>
            <span class="qty-val" id="qty-${i.name.replace(
              /\s+/g,
              ""
            )}">${qty}</span>
            <button class="btn-qty" onclick="updateQty('${i.name}', 1, ${
        i.price || 0
      }, ${i.min || 0}, ${i.max || 0})">+</button>
        </div>
      `;
      content.appendChild(d);
    });

    item.appendChild(header);
    item.appendChild(content);
    m.appendChild(item);
  });
}

// --- CẬP NHẬT SỐ LƯỢNG ---
function updateQty(name, change, price, min, max) {
  const index = bill.findIndex((item) => item.name === name);
  if (index > -1) {
    bill[index].qty += change;
    if (bill[index].qty <= 0) bill.splice(index, 1);
  } else if (change > 0) {
    let finalPrice = price;
    if (finalPrice === 0) {
      finalPrice = parseInt(prompt(`Nhập giá cho ${name} (${min}-${max}k)`));
      if (isNaN(finalPrice)) return;
    }
    bill.push({ name, price: finalPrice, qty: 1 });
  }
  renderBill();

  const qtyLabel = document.getElementById(`qty-${name.replace(/\s+/g, "")}`);
  if (qtyLabel) {
    const currentItem = bill.find((b) => b.name === name);
    qtyLabel.innerText = currentItem ? currentItem.qty : 0;
  }
}

// --- RENDER HÓA ĐƠN ---
// --- RENDER HÓA ĐƠN (Bản cập nhật) ---
function renderBill() {
  const b = document.getElementById("billItems");
  const customerDisplay = document.getElementById("customerDisplayBill");

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const staff = document.getElementById("staffName").value;
  const note = document.getElementById("note").value;

  customerDisplay.innerHTML = `
    ${name ? `<div><strong>Khách:</strong> ${name}</div>` : ""}
    ${phone ? `<div><strong>SĐT:</strong> ${phone}</div>` : ""}
    ${
      staff
        ? `<div style="color:#d4af37"><strong>NV thực hiện:</strong> ${staff}</div>`
        : ""
    }
    ${
      note
        ? `<div style="font-style: italic; color: #888; font-size:12px">*Ghi chú: ${note}</div>`
        : ""
    }
  `;

  b.innerHTML = "";
  let subtotal = 0;

  bill.forEach((i) => {
    const itemTotal = i.price * i.qty;
    subtotal += itemTotal;
    const d = document.createElement("div");
    d.className = "bill-item";

    // Tìm dữ liệu gốc để lấy min/max nếu cần (cho các dịch vụ giá linh hoạt)
    const originalGroup = menuData.find((g) =>
      g.items.find((mi) => mi.name === i.name)
    );
    const originalItem = originalGroup
      ? originalGroup.items.find((mi) => mi.name === i.name)
      : {};

    d.innerHTML = `
      <div class="bill-item-left">
        <span>${i.name}</span>
        <div class="qty-controls small">
          <button class="btn-qty" onclick="updateQty('${i.name}', -1, ${
      i.price
    }, ${originalItem.min || 0}, ${originalItem.max || 0})">-</button>
          <span class="qty-val">${i.qty}</span>
          <button class="btn-qty" onclick="updateQty('${i.name}', 1, ${
      i.price
    }, ${originalItem.min || 0}, ${originalItem.max || 0})">+</button>
        </div>
      </div>
      <span>${itemTotal}.000 <button onclick="removeAndSync('${
      i.name
    }')" class="btn-remove-item">✕</button></span>
    `;
    b.appendChild(d);
  });

  const disc =
    parseFloat(document.getElementById("discountPercent").value) || 0;
  const total = subtotal * (1 - disc / 100);

  const formattedTotal = (total * 1000).toLocaleString("vi-VN");
  document.getElementById("subtotal").innerText =
    (subtotal * 1000).toLocaleString("vi-VN") + " VND";
  document.getElementById("total").innerText = formattedTotal;
  document.getElementById("stickyTotal").innerText = formattedTotal + " VND";
}

// --- XỬ LÝ ĐỒNG BỘ ---
function removeAndSync(name) {
  const idx = bill.findIndex((i) => i.name === name);
  if (idx > -1) {
    lastDeleted = { ...bill[idx] };
    bill.splice(idx, 1);
    renderBill();
    const qtyLabel = document.getElementById(`qty-${name.replace(/\s+/g, "")}`);
    if (qtyLabel) qtyLabel.innerText = 0;
  }
}

function undoDelete() {
  if (lastDeleted) {
    bill.push(lastDeleted);
    const name = lastDeleted.name;
    lastDeleted = null;
    renderBill();
    const qtyLabel = document.getElementById(`qty-${name.replace(/\s+/g, "")}`);
    if (qtyLabel) qtyLabel.innerText = bill.find((b) => b.name === name).qty;
  }
}

function resetBill() {
  if (confirm("Xoá toàn bộ hoá đơn?")) {
    bill = [];
    renderBill();
    renderMenu();
  }
}

// --- CHỤP ẢNH ---
function captureBill() {
  document.getElementById("currentDate").innerText = new Date().toLocaleString(
    "vi-VN"
  );
  const el = document.getElementById("billCapture");
  const btns = el.querySelectorAll("button");
  btns.forEach((b) => (b.style.display = "none"));

  html2canvas(el, { backgroundColor: "#000", scale: 2 }).then((c) => {
    const img = c.toDataURL("image/png");
    const w = window.open("");
    w.document.write(
      `<body style="margin:0;background:#000;display:flex;justify-content:center;align-items:center;height:100vh;"><img src="${img}" style="max-width:95%;border-radius:10px;box-shadow:0 0 20px rgba(212,175,55,0.3)"></body>`
    );
    btns.forEach((b) => (b.style.display = "inline-block"));
  });
}

// --- EVENT LISTENERS ---
window.onbeforeunload = () => (bill.length > 0 ? true : null);
document.getElementById("customerName").addEventListener("input", renderBill);
document.getElementById("customerPhone").addEventListener("input", renderBill);
document.getElementById("staffName").addEventListener("change", renderBill);
document.getElementById("note").addEventListener("input", renderBill);

renderMenu();
