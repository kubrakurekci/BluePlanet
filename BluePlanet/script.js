document.addEventListener("DOMContentLoaded", function () {
  // Gündem kaydırma mantığı
  const scrollNext = document.querySelector(".scroll-next");
  const scrollPrev = document.querySelector(".scroll-previous");
  const gundemScroll = document.querySelector(".gundem-scroll");

  // scrollNext ve scrollPrev elemanlarının varlığını kontrol ediyoruz.
  // Eğer sayfada bu elemanlar yoksa, hata vermemesi için bu kontrol önemli.
  if (scrollNext) {
    scrollNext.addEventListener("click", function () {
      gundemScroll.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  if (scrollPrev) {
    scrollPrev.addEventListener("click", function () {
      gundemScroll.scrollBy({ left: -300, behavior: "smooth" });
    });
  }

  // --- Karbon Ayak İzi Hesaplayıcı Mantığı ---
  const carbonFootprintForm = document.getElementById("carbonFootprintForm");
  const resultsSection = document.getElementById("resultsSection");
  const userFootprintSpan = document.getElementById("userFootprint");

  // carbonFootprintForm elemanının varlığını kontrol ediyoruz.
  // Eğer İz Testi bölümü HTML'e eklenmediyse hata vermemesi için bu kontrol önemli.
  if (carbonFootprintForm) {
    carbonFootprintForm.addEventListener("submit", function (event) {
      // Formun varsayılan gönderim davranışını (sayfanın yenilenmesini) engelle.
      event.preventDefault();

      // Input alanlarından kullanıcı girdilerini alıyoruz.
      // parseInt() kullanarak metin (string) olan değerleri tam sayıya çeviriyoruz.
      const meatConsumption = parseInt(
        document.getElementById("meatConsumption").value
      );
      const dailyCarDistance = parseInt(
        document.getElementById("dailyCarDistance").value
      );
      const monthlyElectricity = parseInt(
        document.getElementById("monthlyElectricity").value
      );
      const flightFrequency = parseInt(
        document.getElementById("flightFrequency").value
      );

      // Basit bir karbon ayak izi hesaplama formülü.
      // Buradaki katsayılar örnek amaçlıdır ve gerçekçi olmayabilir.
      // Daha doğru sonuçlar için güvenilir kaynaklardan katsayılar edinmeniz önerilir.
      let totalFootprint = 0;

      // Et tüketimi: Haftada yenilen gün sayısına göre tahmini etki.
      // (Örnek: Haftada 7 gün et yiyen biri için yıllık 0.5 ton CO2 baz alınıyor, bu 7'ye bölünüp gün başına oranlanıyor)
      totalFootprint += (meatConsumption / 7) * 0.5;

      // Araç kullanımı: Günlük km'ye göre yıllık CO2 emisyonu.
      // (Örnek: Her 1 km için 0.0002 ton CO2 salımı varsayılıyor, yıllık olarak 365 ile çarpılıyor)
      totalFootprint += dailyCarDistance * 365 * 0.0002;

      // Elektrik tüketimi: Aylık kWh'ye göre yıllık CO2 emisyonu.
      // (Örnek: Her 1 kWh için 0.0004 ton CO2 salımı varsayılıyor, yıllık olarak 12 ay ile çarpılıyor)
      totalFootprint += monthlyElectricity * 12 * 0.0004;

      // Uçak seyahati: Yıllık uçuş sayısına göre tahmini CO2 emisyonu.
      // (Örnek: Her uçuş için ortalama 0.5 ton CO2 varsayılıyor)
      totalFootprint += flightFrequency * 0.5;

      // Hesaplanan toplam karbon ayak izini bir ondalık basamağa yuvarlıyoruz.
      const roundedFootprint = totalFootprint.toFixed(1);

      // Hesaplanan sonucu HTML'deki ilgili <span> etiketine yazdırıyoruz.
      userFootprintSpan.textContent = roundedFootprint;

      // Sonuç bölümünü görünür hale getiriyoruz.
      resultsSection.style.display = "block";

      // Kullanıcı butona bastığında, sayfanın sonuç bölümüne sorunsuz bir şekilde kaymasını sağlıyoruz.
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
