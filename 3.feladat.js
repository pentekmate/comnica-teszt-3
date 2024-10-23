let usersWithColor = []


function createNewArray(users,hexCodes){
    users.forEach((user)=>{
        let newObj = {
            userName:user,
            userHexCode:hexCodes[Math.floor(Math.random() * hexCodes.length)]
        }
        usersWithColor.push(newObj)
    })

    console.log(usersWithColor)
}

async function fetchData(url1, url2) {
    try {
      const [users, hexCodes] = await Promise.all([
        fetch(url1),
        fetch(url2),
      ]);
  
      if (!users.ok) {
        throw new Error(`Hiba: ${users.status} - ${users.error}`);
      }
      if (!hexCodes.ok) {
        throw new Error(`Hiba: ${hexCodes.status} - ${hexCodes.error}`);
      }
  
      const usersJsonData = await users.json();
      const hexCodesJsonData = await hexCodes.json();

      console.log('Fetch is done.');

      createNewArray(usersJsonData, hexCodesJsonData); 
  
    } catch (error) {
      console.error('Hiba történt az adatok lekérésekor:', error);
    }
  }
  

fetchData('https://valami.com/users', 'https://valami.com/hexCodes');