window.addEventListener('DOMContentLoaded', function() {
    const cachacaGrid = document.getElementById('cachacaGrid');
    
    
    const imageNames = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  
    
    imageNames.forEach(function(imageName) {
      
      const img = document.createElement('img');
      img.src = '/image/' + imageName;
      img.alt = 'Imagem de Cachaça';
      
      
      const cachacaItem = document.createElement('div');
      cachacaItem.classList.add('cachaca-item');
      cachacaItem.appendChild(img);
      
      cachacaGrid.appendChild(cachacaItem);
    });
  });
  