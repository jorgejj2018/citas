// citas
const citas = [{
    cita: `- La innovación distingue a los líderes de los seguidores.`,
    author: `Steve Jobs`
}, {
    cita: `- Muchas veces la gente no sabe lo que quiere hasta que se lo enseñas.`,
    author: `Steve Jobs`
}, {
    cita: ` - La vida es injusta, acostúmbrate a ello.`,
    author: `Bill Gates`
}, {
    cita: ` - Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso.`,
    author: `Bill Gates`
}, {
    cita: `- La vida es frágil. No tenemos garantizado un mañana, así que da lo mejor de ti.`,
    author: `Tim Cook`
}, {
    cita: `- Cuando un sueño aparezca, ¡agárralo!`,
    author: `Larry Page`
}, {
    cita: ` - Debes hacer cosas que realmente sean importantes, pero también debes divertirte, porque si no, no tendrás éxito.`,
    author:`Larry Page`
}, {
    cita: `- El único modo de salir de una caja cerrada es inventar la manera de salir.`,
    author: `Jeff Bezos`
}, {
    cita: `- El mayor riesgo es no correr ningún riesgo.`,
    author: `Mack Zuckerberg`
}, {
    cita: `- La pregunta no es "¿qué queremos saber de la gente?", sino "¿qué desea contarnos la gente de sí misma?`,
    author: `Mack Zuckerberg`
}, 
{
    cita: ` - El mundo se puede cambiar en 140 caracteres.`,
    author: `Jack Dorsey`
}, 
{
    cita: `- Si algo es lo suficientemente importante, deberías intentarlo. Incluso si el resultado probable es el fracaso.`,
    author: `Elon Musk`
}, 
]
// Boton nueva cita
const citaBtn = document.getElementById('new-quote');
// Capturando cita autor container
const cita = document.querySelector('.cita');
const author = document.querySelector('.author');
// Evento CLick 
citaBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * citas.length);
    cita.innerHTML = citas[random].cita;
    author.innerHTML = citas[random].author;
})