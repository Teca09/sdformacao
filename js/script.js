/* ===== Configuração ===== */
const WA_NUMBER = "244922814199"; // número principal (WhatsApp)
const MSGS = {
    geral: "Olá! Gostaria de saber mais informações sobre os cursos da SD Formação.",
};
/* ===== Dados dos cursos (adicione novos cursos aqui) ===== */
const COURSES = [
    {
        n: "Informática + IA",
      image: "img/informatica.jpg",
        d: "Do primeiro clique ao uso inteligente da Inteligência Artificial: desenvolva competências digitais para acompanhar o mundo atual.",
        m: 4,
        t: ["Internet", "Office", "Inteligência Artificial", "Produtividade"],
        msg: "Informática + IA",
    },
    {
        n: "Marketing + Tráfego Pago",
      image: "img/Tráfego_pago.jpg",
        d: "Aprenda estratégias de marketing digital, redes sociais e tráfego pago com apoio da Inteligência Artificial.",
        m: 2,
        t: ["Marketing Digital", "Redes Sociais", "IA", "Tráfego Pago"],
        msg: "Marketing + Tráfego Pago",
    },
    {
        n: "Hardware + Manutenção de Computadores",
      image: "img/hardware_manuntencao.jpg",
        d: "Aprenda montagem, manutenção, formatação e resolução de problemas em computadores.",
        m: 2,
        t: ["Montagem", "Manutenção", "Formatação", "Resolução de problemas"],
        msg: "Hardware + Manutenção de Computadores",
    },
    {
        n: "Excel",
      image: "img/excel.jpg",
        d: "Domine o Excel e transforme uma ferramenta do dia a dia numa competência que pode usar no trabalho e nos seus projetos. Do básico ao avançado, com práticas reais.",
        m: 3,
        t: [],
        msg: "Excel",
    },
    {
        n: "Edição — Canva + CapCut",
      image: "img/edicao.jpg",
        d: "Aprenda a criar artes e vídeos profissionais para redes sociais.",
        m: 2,
        t: [
            "Canva",
            "CapCut",
            "Artes para redes sociais",
            "Vídeos para redes sociais",
        ],
        msg: "Edição (Canva + CapCut)",
    },
];
const waLink = (msg, num) =>
    "https://wa.me/" + (num || WA_NUMBER) + "?text=" + encodeURIComponent(msg);

const grid = document.getElementById("grid");

grid.innerHTML =
    COURSES.map(
        (c, i) => `
        <article class="card rv">
          <div class="thumb"><img src="${c.image}" alt="Curso de ${c.n}" loading="lazy"><span class="num">0${i + 1}</span></div>
                <div class="card-b">
                    <h3>${c.n}</h3>
                    <p>${c.d}</p>
                    <span class="mod">${c.m} módulos</span>
                    ${c.t.length ? `<ul class="tags">${c.t.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
                
                    <p class="det">Formação presencial ao domicílio e online, com equipamentos e materiais inclusos e direito a certificado. Fale connosco para conhecer os detalhes do curso.</p>
                
                    <div class="card-a">
                        <button class="btn btn-l more-btn" aria-expanded="false">Quero saber mais</button>
                        <a class="btn btn-o wa" href="#" data-msg="Olá! Tenho interesse na formação de ${c.msg} da SD Formação. Gostaria de saber mais informações sobre a inscrição." target="_blank" rel="noopener">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#wa"/></svg>Fazer inscrição
                        </a>
                </div>
            </div>
        </article>`,
    ).join("") +
    `<div class="more rv" aria-hidden="true">Mais que cursos,<br>habilidades<br>para a vida!</div>`;
grid.addEventListener("click", (e) => {
    const b = e.target.closest(".more-btn");
    if (!b) return;
    const c = b.closest(".card");
    const o = c.classList.toggle("open");
    b.setAttribute("aria-expanded", o);
    b.textContent = o ? "Mostrar menos" : "Quero saber mais";
});
/* links WhatsApp */
document.querySelectorAll(".wa").forEach((a) => {
  const m = a.dataset.msg;
  a.href = waLink(MSGS[m] || m, a.dataset.num);
});
/* menu mobile */
const bg = document.querySelector(".burger"),
  menu = document.getElementById("menu");
bg.addEventListener("click", () => {
  const o = menu.classList.toggle("open");
  bg.setAttribute("aria-expanded", o);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    bg.setAttribute("aria-expanded", false);
  }
});
/* reveal */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        io.unobserve(x.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));
document.getElementById("yr").textContent = new Date().getFullYear();
