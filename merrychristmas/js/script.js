// Change the image on hover for a festive effect
const holidayImage = document.getElementById('holidayImage');
holidayImage.addEventListener('mouseenter', () => {
  holidayImage.src = 'https://via.placeholder.com/600x400?text=Frohe+Weihnachten!';
});
holidayImage.addEventListener('mouseleave', () => {
  holidayImage.src = 'https://via.placeholder.com/600x400?text=Frohe+Feiertage';
});

// Personalize the message dynamically
const customMessage = document.getElementById('customMessage');
customMessage.innerHTML = `Liebe Mama, <br>
              Ich hoffe das nächstes Jahr besser wird und alle deine Wünsche in erfüllung gehen!`;
