const map = L.map('map').setView([-23.5450, -46.6270], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const rotaAfetada = [
  [-23.5450, -46.6270], // Av. do Estado – Viaduto 25 de Março
  [-23.5475, -46.6400], // Praça da Bandeira
  [-23.5128, -46.6566], // Marginal Tietê – Ponte da Casa Verde
  [-23.5290, -46.6385], // Marginal Tietê – Ponte das Bandeiras
  [-23.5610, -46.5315], // Av. Aricanduva – nº 5.250
  [-23.5580, -46.5270], // Av. Aricanduva – Rua Manilha
  [-23.6100, -46.6230], // Av. Prof. Abraão de Morais – Gal Chagas Santos
  [-23.6120, -46.6250], // Av. Prof. Abraão de Morais – Francisco Tapajós
  [-23.6220, -46.7030], // Av. das Nações Unidas – Cristalino Rolim de Freitas
  [-23.6240, -46.7070], // Av. das Nações Unidas – Av. João Dias
  [-23.6255, -46.7090], // Av. João Dias – Ponte João Dias
  [-23.6270, -46.7110], // Av. das Nações Unidas – Rua Florenville
  [-23.6290, -46.7130], // Av. das Nações Unidas – Jaime de Oliveira Souza
  [-23.6310, -46.7150], // Av. das Nações Unidas – Mário Lopes Leão
  [-23.6030, -46.6340], // Av. Rubem Berta – Praça Juca Mulato
  [-23.6050, -46.6360], // Av. Dr. Ricardo Jafet – Viaduto Saioa
  [-23.6070, -46.6380], // Rua Vergueiro – Ricardo Jafet
  [-23.6090, -46.6400], // Av. 23 de Maio – Viaduto Gal Euclides de Figueiredo
  [-23.6500, -46.7200], // Av. Guido Caloi – Ponte Transamérica
  [-23.5700, -46.5900]  // Av. Dr. Francisco Mesquita – Rua Igaratá
];

const rotaSegura = [
  [-23.5430, -46.6240], // próximo ao Viaduto 25 de Março (área mais alta)
  [-23.5455, -46.6360], // perto da Praça da Sé, menos propensa
  [-23.5100, -46.6540], // acima da Ponte da Casa Verde
  [-23.5305, -46.6410], // Av. Cruzeiro do Sul (leve elevação)
  [-23.5590, -46.5335], // Av. Itaquera (melhor drenagem)
  [-23.5560, -46.5255], // Rua Padre Virgílio Campêlo
  [-23.6080, -46.6210], // Av. Bosque da Saúde (mais alta)
  [-23.6140, -46.6270], // Av. do Cursino
  [-23.6190, -46.7000], // Av. Roque Petroni Júnior
  [-23.6250, -46.7050], // Av. Giovanni Gronchi (trecho alto)
  [-23.6260, -46.7100], // Rua João Sussumu Hirata
  [-23.6285, -46.7125], // Rua Cel. Luís Barroso
  [-23.6300, -46.7145], // Rua João Carlos Mallet
  [-23.6320, -46.7160], // Av. Padre José Maria
  [-23.6015, -46.6330], // Rua Pelotas (próxima e segura)
  [-23.6035, -46.6355], // Rua Domingos de Morais
  [-23.6055, -46.6375], // Rua Rio Grande
  [-23.6075, -46.6395], // Rua Machado de Assis
  [-23.6480, -46.7180], // Rua Américo Brasiliense
  [-23.5680, -46.5880]  // Rua Ibitirama (altura menos crítica)
];

L.polyline(rotaSegura, { color: 'green' }).addTo(map)
  .bindPopup("Rota segura");

L.polyline(rotaAfetada, { color: 'red' }).addTo(map)
  .bindPopup("Rota afetada");

const abrigos = [
  { nome: "Escola Estadual São Paulo", lat: -23.5425, lon: -46.6245 },
  { nome: "Centro Comunitário Sé Solidária", lat: -23.5460, lon: -46.6355 },
  { nome: "EE Prof. Roberto Mange", lat: -23.5095, lon: -46.6535 },
  { nome: "Igreja São João Batista", lat: -23.5310, lon: -46.6400 },
  { nome: "Centro Esportivo Aricanduva", lat: -23.5585, lon: -46.5340 },
  { nome: "EMEF Jardim Santa Teresinha", lat: -23.5555, lon: -46.5245 },
  { nome: "Paróquia Santa Isabel", lat: -23.6075, lon: -46.6215 },
  { nome: "Colégio São Lucas", lat: -23.6135, lon: -46.6265 },
  { nome: "EE Prof. Emygdio de Barros", lat: -23.6185, lon: -46.6995 },
  { nome: "Igreja Batista do Morumbi", lat: -23.6245, lon: -46.7045 },
  { nome: "Colégio Adventista Santo Amaro", lat: -23.6255, lon: -46.7095 },
  { nome: "Centro Cultural João Dias", lat: -23.6280, lon: -46.7120 },
  { nome: "Associação de Moradores Vila Sônia", lat: -23.6295, lon: -46.7135 },
  { nome: "EMEF Prof. Leônidas de Castro", lat: -23.6315, lon: -46.7155 },
  { nome: "Colégio Maria Imaculada", lat: -23.6025, lon: -46.6335 },
  { nome: "Centro Espírita Paz e Luz", lat: -23.6040, lon: -46.6360 },
  { nome: "Associação Beneficente Bom Pastor", lat: -23.6060, lon: -46.6380 },
  { nome: "Igreja Pentecostal Vida Nova", lat: -23.6080, lon: -46.6400 },
  { nome: "EMEF Prof. Oswaldo de Oliveira", lat: -23.6490, lon: -46.7190 },
  { nome: "Associação São Judas Tadeu", lat: -23.5690, lon: -46.5890 }
];

const lista = document.getElementById("abrigos-list");

abrigos.forEach(a => {
  const li = document.createElement("li");
  li.innerText = a.nome;
  lista.appendChild(li);
  L.marker([a.lat, a.lon]).addTo(map).bindPopup(a.nome);
});

function receberAlerta() {
  const numero = prompt("Digite seu número de WhatsApp com DDD:");
  if (!numero || numero.trim().length < 10) {
    alert("Número inválido! Por favor, tente de novo.");
    return;
  }
  alert(`Número ${numero} cadastrado! Você receberá notificações.`);
}



