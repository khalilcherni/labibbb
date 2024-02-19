'use client'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Navbar from "../Navbar/page";
function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ResponsiveDialog() {
  return (
    <div>
<Navbar/>
    <div>
    <ImageList
      sx={{
        width: 900,
        height: 600,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
    <div>
    <p>
    Waste disposal is one of the most important industries in the world. Without waste disposal, the massive production industries produce too much and quickly destroy the environment. This is apparent when you consider how improper waste disposal affects the environment. If you want a better understanding of why waste disposal is so important, here’s a brief look at the effects of improper waste disposal.

    <h3>Land Pollution</h3>
    Land pollution happens whenever waste ends up on soil or other land that people should process instead. This garbage doesn’t just sit there; the contents break down, whether by rotting or time and seep into the area around it. This means the dirt and all surrounding areas absorb the pollution and become dangerous for people and animals.
    
    <h3>Water Pollution</h3>
    Whatever waste doesn’t go into landfills or other disposal areas usually finds its way into the ocean or other bodies of water. It then breaks down into the ocean, slowly contaminating the water and choking out the life that water hosts. This process raises the toxicity of the water, making freshwater unsafe for human consumption and any body of water toxic for those swimming in the water. Since water travels and is a great solvent, the pollutants don’t easily leave the area and can contaminate other water sources.
    
    <h3>Air Pollution</h3>
    Air pollution is a major issue worldwide, and understanding how improper waste disposal affects the environment through air pollution is necessary. A basic understanding of air pollution states that greenhouse gases build up in the atmosphere and cause massive global climate change. Improper waste disposal is a contributor to excess gases entering the atmosphere and causing these problems. The breakdown of the waste releases gases like methane, which is a major factor in global climate change.
    
    <h3>Climate Change</h3>
    A huge issue that comes from all forms of pollution is the contribution and impact it has on the global climate. Waste contributes to the gases that thicken the ozone layer. This, in turn, worsens the weather and melts the ice caps, raising the sea level and negatively impacting natural habitats and the homes of billions of people.
    
    <h3>Extreme Weather</h3>
    Climate change has also caused a gradual increase in the frequency of extreme weather and natural disasters. Due to the change in climate, there has been a noticeable increase in disasters like tornadoes and floods. Even the presence of hurricanes has become more prevalent because of climate change.
    
    <h3>Disease</h3>
    Unprocessed waste is a huge breeding ground for major diseases. All kinds of diseases can use places like landfills; even contaminated waters can host all manners of horrible diseases. These diseases can affect animals, plants, and people alike—improperly processed waste is horrible for the health of all living things.
    
    <h3>Plant Death</h3>
    Contaminants in both the air and water have horrible effects on plants, as soil with contaminants will kill most plants. Even if there are no contaminants in the soil, the water brought by the rain can be toxic for plants and kill them.
    
    <h3>Animal and Marine Death</h3>
    Plants aren’t the only things that suffer when it comes to waste; both land and sea animals die from waste left around. From sea turtles and fish dying because of plastic in the sea to animals eating hazardous materials left lying around, there’s a lot of death in nature because of this waste. In this way, improper waste disposal directly leads to the extinction of many species every day, causing permanent damage to ecosystems across the globe.
    
    <h3>Loss of Habitats</h3>
    Every animal has a range of environments it can survive in. This is why you only see specific species in certain locations. However, waste contributes to global climate change, which changes the size of the habitats animals need to survive. A decreasing habitat size drives species like polar bears to extinction as they attempt migrations out of the areas.
    
    <h3>Lower Biodiversity</h3>
    The extinction of species and deaths of crops means the biodiversity across the world is slowly lowering. This is bad for the health of nature, as lower biodiversity increases the chances of complete extinction during a disaster. With fewer different species, diseases have an easier time traveling, and leaving fewer species that can survive environmental changes.
    
    <h3>Worsening Infrastructure</h3>
    There are a lot of changes to the world outside of global climate change that comes from waste; even infrastructure suffers from waste problems. Plastics and other wastes in local water sources will clog drains and contaminate drinking water. Areas of land pollution are breeding grounds for pests, like rats, which flourish in dirty environments.
    
    <h3>Radiation and Hazardous Materials</h3>
    Most people don’t consider the dangers of radioactive waste because of strict regulations, but improper handling can lead to radiation poisoning in areas near the waste. Even other materials that prove harmful to humans can find their way into local areas if industries don’t properly process their waste with an industrial disposal service capable of handling their waste.
    
    <h3>“Dead” Zones</h3>
    We often don’t consider places like landfills as “dead” space, but they’re exactly that. The more trash and waste flows into these fills, the bigger they grow and the more numerous they become. These create places where nothing else can exist, as the space is useful only for waste and garbage, thus creating an area that serves no other purpose.
    
    <h3>Human Impact</h3>
    Between all the diseases and climate change that improperly processed waste creates, it’s easy to see how this impacts every person. The worsening of the environment stems partially from the mistreatment of waste, and ending any practices that contribute to extra waste can help save many lives and keep the world’s environment in a healthy place.
    
    For many people, the reduction of waste and commitment to handling waste properly is a daunting task. Some even feel that it’s too late and there’s no point. However, every change people make by properly disposing of waste can save lives and suffering in the future, even if it’s only a few people. Additionally, it increases the chance of something major changing and fixing the issue overall. So always be sure you’re assisting in the proper management of waste and not speeding the environment towards a dangerous end.</p>
    </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://blog.dol.gov/sites/default/files/inline-images/Bangladesh_recycling_boy_CL%20%28FINAL%29_resized%20for%20blog.png',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://philippinerevolution.nu/wp-content/uploads/2023/03/childlabor-photo-from-rappler.jpg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://meet-the-philippines.com/wp-content/uploads/2016/07/Cambodia-child-labor-day-June-13-2014.jpg',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://adyjoycl.files.wordpress.com/2013/01/payatas-child-scavenger-from-the-child-labour-picture-project.jpg',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://vid.alarabiya.net/images/2019/08/01/8e78e3ad-3499-4cbc-af58-45fd9b071941/8e78e3ad-3499-4cbc-af58-45fd9b071941.jpg?crop=1:1&width=1000',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpmzYtILW3y3nb3ldqPvon1Zb2stE2Itvlw&usqp=CAU',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://cdn.nawaat.org/wp-content/uploads/2020/04/Corona-decentralisation-2-2000px.jpg',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRUYGBcaHBsbGxsbHCIhIB4iHRsdHSIbIB4gICwkGyApIh0aJTYlKS4wMzUzGiI5PjkyPSwyMzABCwsLEA4QHhISHjIqIikyNDIyMjQ0MjIyMjIyMjIyMjI0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABAEAABAwIDBQUGAwgABgMAAAABAgMRACEEEjEFQVFhcQYTIoGRMkKhscHwUtHhBxQjYnKCkvEVFjOiwuIkY9L/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKxEAAgICAgEDAwMFAQAAAAAAAAECEQMhEjFBBBNRBWFxFCKBMpGhwdEV/9oADAMBAAIRAxEAPwDyZCc1uf0ozAYl5hRW0vKSMpgAyJBghQINwKERAEzeukOGaQdqjeLxLiyC4SSAEgkAWGgsBpQ4NGrcBSfKoFJRbcSfSigMjmpGHcqgToDfpofhNcqa4Ga0hlR3QBqo2A6n6a0QEroKFFMzB14jcehEHzrjvDxqJxcnjAAB5AAD5VqaFGstOA7a4lrDKwkpcaKQkBYOZF8xCVJIMTIhU7tKb7UeU44hbaoypSoLuASkxb8UTrVABr0BDxWzhFD8BQeuVH/tXPlSTTLYtpgfaLtOt1xAcRAaWteUfiWBKusyRwEUIvauHUoHu1GCDGUbrRYzz1qDta1ldzZcucAkc4v8CmkYcI/0PyplBSSYstMvjm22BnU0/iWZKSlALsJuD7N0WvGtcYTtGGlBLWNsZnvGrDNEzZJVYfDnVGLx+xHyrsYk/rJn50fb+7BZa9sLZhRC8G5lAJLfhUq+4KzEnTRQsDSdLbK5HdEKgkFKjy3Zo0k6TShapvNdYdxQFjb7NHjXRrOlYVVzoJtJ3eVdKwlrKCjwGtbGIVBE2NjYflXbeKUCDwM0dgOUtEDQzWFR1v1rpWIJtFcOPmIEjzrKzM7Q6a7S7QqVpKt4G+835da0tZGnxo0AZOKg+QPqK5zTvPqahxDvjIABjw6xpbhUaVL4D1oUFMMWkkDxHTXzNayHjPWoVlZiDlgRx430rXdqOqifhW4oPNnS3APaCQeV65Q4o+yDHoK6Q2kaD86KQqtxRubOcOlwKzZ4PEfKa1i2nFHMVFfW5FdF0A2PXhzM7q7w2KzGEjhrQaS2FSfQvS4JvFStJQrgON6GdkmSdTwiPStJTHWs0FOxkltG751GplG/50vzxyNYtUkADhetRm6C04ZJ0T8/zrKaIfSkBMG1ZScmPSKuqd9aE10E1ys10HOb7wmsUqtJrcVgEqVg661OXiRcyIsNw8hYUFFbBrUEabH2cnEOd3dJyLIjiEmNdRMSKXjDm0EGaf8AYdX/AMhSjENtLX6ZR9fhVfDsZYGgFKm7aC6pHbSsiVykZvCm94mSfXKB0Jq07McBwjZvCHRN+JUnX+9PpVdbdCkkKHA+Ux8zTDD7QShhxmCSohSTIgQUkTx9n40mWLklXyPikot38DTtYzmZQ4I8JCbcgAfipFU+av6k97gnUgA+/wCqQEkf3AT5V59Wx9UbIt2dTXQqMGtzVBDo1I1XCTXSDQCSAVsCuQaM2bgHH3A202XFmSEiNBqSTYDmaD0HsHAi9cuJ1q24j9n+PQjP3SVcUoWkq9LT0E1VVjj97vpQjJS6M4tdgxGvlRChA0nynUVBrajFokwI43086ZioI2jhVhJUUhIzm/U/AUvQ5Buryp3jzkcSSZStKSoESCcoF+NJcWgBaiLpmxAIB6SLdDSxYWidGJMKB1jwkDmNfLN8KxK1AHxX++VCpNSoSSDbUVmAmWsGNCYMnnJO7dEUww5HdytI8eYKkaaRHDlSphMbv1qVa5KhNkmB9+tLJWFOjWJt4Rcbj+LeCfXSt4ZeRYPA/rFcq3EHjXBWq286etHwY2uVqUqN5rpDZURAO4fY1muSLWN9b/LnVu7BbNDiy6oA5bDqdT5fWhJ0rMlbFm1Oy2KbFmysZQoZbrSDxSL9YkClGGwqgsBSSk2soEHrB3V7TtVha1NFpYBIykxOm/41HgsO29iO5fabcU2FKKsvlB5GQYOscqlHK+irguzy9nBBQzcZOnOt1781hmEgJDTYAsAEJEfCtUeL+Rua+D5kbw6lJcKSPAkKV0mLfe6g4q24Ps3imnFpcaUULQpKiiF7rWTKtRGm+lmA2OCod6sIgElJ1UQQMgGpN500BroUrujnloTxWwN1XDFdl0rhxhClNKFst8pGov8AU012P2OTBW43kgSCvxHS/gMoMDeeNgCAaR5UlYsXy2ioYDYa3G84kKuUiNQN/G5sIprsfsZilrbUppaRMkqTlCYvcqF9N09K9W2PgmUtocbRBygJzEyABAtom24RrRGRIMqcJJ3WsOFT9yTT+/8AgeON+WUdvsX3KHVhxRddQtE5YSkLuYGqjaZt0rzHEsKbWptYIUkkEHl9zX0LiEJUJ11g8OdVDtDspuO8ygyQhYIBmNJ6HfWhNxexnFNHl2GEhQGuX/ySa4CqvCtktWCW8pM3TaBHK2sUvxHZlABUlah/Vf1Nqr7iF4NBvZnEpDJBtCVJ63ET5fOqvimQFLSYHiIHMag+kVYNiNd2FJJSoSdDqQPhRmPYaKlKSgZSSIIFuW+Y01qSlUmVa5RRRFNbwbVGU0XiQEuKAsJ0qPP51ciDmu20TFTltMGZFpqYiU+EelazELbR4E8uvzr0P9nmycSw4t5ba2wpuElaYCpUDAm+4H0oP9l20G28YpLiSVLRlbVlnIQZM/hBHvaCL17C8ylYvXPnnKqRbGo9ik41xXvAeX0mvFe1eHKMY8n+cq/z8f8A5V7mcCgbz60v25sPCvNq79CYSk+PRSOihfXdcHhXNgk4ytlckVJaPA1j2SJk0QpRTvkkQr1n1o5WyFCPHYG0iJ/KhgyqFTAvv6n1rvtM56ZG/iFqAJNgIAA3RQSkq8qP/dFEQm5tpqeldsbOWZzHJpAVv/KtaQGrFoQTuqdK7CONMsPs+CM++wAtfrTtnZLSdUBKwQQQSZEctb8eelK8iMsbK0tBMIgzMZYkyRw1HWj2NiJyiXcqhqVJ8OlgSDI6wac4fDMocK0tk5oAK1ackzOvXlTtlhDngDSADuULW6/lS+4kNwZT8D2ffcJCUABJIlUwr+m3iHMWvRmF7MvpWQtsgH3okeW89DFXthkoIC1oACZkG3S9HNbaw58BeQT1t66UnNsPFIo+F2PhmyE5C6smBmMCeAFhv51ak7H7od21lbcPuoQAg20kXn+f4UQtCSqWzpJK/FCIGswY68qiwu0lA2dzuJEuDu7EAk2KgCkxbnrFJbk6so+KWkLcBiXS93RcyFty7dvEDrfUQLiLXHEVacDjkNqX7EkAkGyjFhePEBO6Ymkz2y2cTi1lwOFxLLZHdnKQorWB1OUDW1t9NMLhUKSAV3SBKVgSDpmMAGTxG+h50b8hqdutH3Ff4z8d9ZQcti0tW5x8MtqyjzYOKKb2HQp3DQsJUkki8yItYnnBqz4XYrQOdxpDpHvuJzLsLeKJNU7s/j/3VnDhN88FQ3Ssz5RI9KvDGOFiVEkx4VCmbSbr5EUKGmGQoDwIQkcTPyJrteIPsjXflF/hp50A864ffT/SIitIS4bJyjoUz6AH50fwY7xGHUTPdkcz9YrQIQBnGSbCwvQD+1FoWW21KW4LKiSEdfypZj3FJclSitxQgAqmP5uCQBJjlSuSQyTH63W1RkWDM8tDHztQ20cMCnKYIO74H6elDY5AQlKbCYj+3fyreE2q2VFtbqEuJFs2+bAj8taClydBcaRW5AVYyBvGhBgiOOoooc4rnayA26VaJX4hHxsOGpP83Kto504qYLiWgEkpTEXmPX4E0G6i0+fSmrkEQdDupSlZgjeJoPsdbVFK2sSHVeRHEWFCNuGZp47sF95xSm0SLXJAv5nlUieyL/vlCf7pPwH1q7yRS2yChKT0hD3piOtE4Uq0TfXT7+5rrGbKcQ4ptKVOFIBlCSbEa2qbYwcUVJQFTIsAN9r76bkqtA4tOmeh9gsAG8O66oJ7xZyEjckAGOUkz5DhQe1cW82Spl11B0ypUYkGQcunEHrRPZbvG2nEuGD3nhzQJGRM3MTePjUu0kN2OdMz7Ivy3aRU5SVE1GXLSELHarGuKCBiHOYASNNTITNWTZ2PWVKS4pSwQoEKJNpPHkRSTB7OCVuuRdZsOA/UyfMVFhtrpbdXmNgAAb6Wn4jWlikuik5Sl0BbfaUh4tAyU6eZsZ3SINawGynFwDJA1AsBYx9aYY/Epec71sEJKUpmPaItPHQgAcqcbPcQ2gSmd5giT5UJTrSL48U5+ABjsyT7BAVBPiN41gRpffUTHZ10qIKdDEkiDxI5Vb9mPhxYUlJSJI8REm26PL1pmWwFH1qct7sbcHxa2IdmbFQ3mkSVQD0AiOmtc4zYjYBKAUk6QTA4HLMW4U7Bv8aAxkOKKOHHSTHrY/ClsHkQ4bZLhchoBciFKBAj+oxI+PSrOjYDYyypZUkbrCbGeJOnCmuFwjaEBLeUAajjz5mje9A4EjhVlDWxZSsq+2dlrWlPjSkT4hcnqLQDreqztDYabwVAifenN6RAp32u2ktORto/xfaXE2BEAdTJPKKS4LZz6FBxRKs3tSox1id1TaSegpkWyX3W3ciUq8Kcy/eK4k79LTJPDXSrdsbDJcacDaQHF+IuKv4zcn+2TFRbKcbCSpADjjhUNPZSPCEk8wJjnRaGnFqDZV3YEE5NQAZjlMUE6YX0TbKwAw7jgUe8zJQorJBUVSqSQLpFwBaKq3abaAaxS/GjK4AEtnMSrNrIA8IJJTqNBawItGO20ttxDYQpWdSUJUlJIlRgAkez1NqnW0HPaCFxoSEmDxEgxTpp+BNoG2dhWFNIJQwCRorXzrKNRhFwIWI3QSPgFWrKrUfgXfyeI4zDLbBScyYyZfFIAExF7f6r0DZO0QtttUz4BM8d4nkd1QbR7KPuSpaEIFgASDpqowTGtKdkJcwji8Mtu+bOhUwldoN4MwQOe6lltGh2y54R2LKSjjKov50dj9oNttlxYSlI0gxVb2jiWmQHHym/sySJIgwE6Ui2htpeJALbXeKAzJQLgcyN/W/lU99FNB//ADG4uEYZpKEXlawY5q5xzo1GLcWnIpRdVA90IF73jS0W1uKqmzNvrnI8Be06AHhHCmb20nFp7tjIiZ8RBzGTrmuAPK1LKLWhk0MV48ZwpxcqFh5WgDhzqq4/a7bjyxBjTMk8AJHrNdqwziLOAoChClgyL2soTFJnNnLYX+Js2C03B5cAeRqmKKTbsnkdoYDFgK/hqJid5lPURTPA7cTZK1C5gHSqziG/eGo0P06cqjUvMm0E7xpH6fpV3FMknRfe/KpKUKIBg2I0+J8qCCfEo79baEdOs0RsjFnuUKUvUxBMnlI3C+vKpdqYVxLqBElaVWSDIGsm3MV5byZPd4yVLdHoQhBR5Re/IA2XFKhtzIjMM0gXJMmLTHnvppiMUG3O7ySCAZkQBxMmak2UCcmVtEoPjUpOiZN8xIg6i82FT7UwbZSYRlUpYOdP/qLJ37qooyTu9fFBjLFJ1JNfdEIxWfJlSVlRgbgAJvrPrS3Mw0+tC0BC95I1nxSSLb9/GnAwhGVKEBRyjKrNCY63PwqBnZbSkKdxF1ibA+EAGyQN5NpB41P1EopK29618k4um+KVfcMxLSe7yC1oPnuPyqtqUULLajPA8RTtWIzJK0qF59rQjiOnDUXpNiNnOODOQAkXk2npP1ir8LikTx5XGbfhkii4QUpEeBUE3BVBi3CYtUnaTYyQApIKQAee4etwagSh1rLIzJOkRJ6p1oxvFoVZYKT9676HuOOmij9On+6L7FOysSlKe7VpuI+YqxYTBhfsnQa6jn03UM9hW4JzSDY6ceO6jezWwnUOBzvAhkGZ/HaISk3HAn50EuTtFo5HjjvTH7OCAbQmfZlUjjy8jXOJWRKAZJgX4UftIpZQXCf4f1PujmaU4Z7MCr3iZP8ALvgnQWqktaOS+T5MnxD4SJPD79aXKWASojMr68/U+tTIZU4rMSkpHBQO7kd1RoaU7KEwhQBGY7hxjeamm2xuio7T24+lxWV0oGYiAY9BFDf8RxDqBLzh9oqAUd24JTfnYbxVpxHZLBhMLdcKj7wy26CDc8zRvZ/BYPBZyHe8zHNmygqTYDKopHs6ESBea6F0LNpvRQBtRESEqcKdQpRAnnu+tOdi7ZdezJTh0JShJUQFKJGgkCOegq54jbbDrnduNAhJss5QR0KhaeRo/aDDPdqeQlEhB8SQJy2UUyNQYFNxVbRG5N6Yq2W46ltbaAn2pzGcqfK0nkPOKO2ZiG4KQorUkytZtJ/F04chUOz2VFtKnM1x4EERA3GNZj51HjMItJ7xsyoSYMX4pURrOknlUW6ZRK0HMbSbccDZSCpEqnemIvOm8aGtsmVeEQI8586BwykLCnEWUoFJB92YJtxEUuXinUnLJSUr1/EBf0NPDaFlouDboAEk+tapKpzggKBuD1vGm7TyrKpYKI8O0ptkuYh85U3hKpiP5lC/CIiqFj+05W6qye7M5AQlRQeIKknLIJBIjdUe1toOPo7suFKdQiEggG4/rtvCqrGHwye8yuKidFDTkb7jVP00oK5AWWMnSL4raYcbS24hpaLQlSZmN5M+FXTpRmAaS2gpaAbQozlRIk8ybmOE1VGGnGDnbyryxbu83rBq5bG7bZsOVPsiUqKSU2BFrgGb3rlnF/Oi6a+NlRODDziglJEKUM0WjNEc91LnGHGlHKogDUbvQ8avr6g6SlCQEkEpjSCR7Mb9TPUVSmsCsuLHeQq4AOh5ffKnjInQTsvtApJhzNE3KPqD9KsyP3V5teRYEjxJIImTAlPHS4pJsnZyc2d1F0+6DIJmATHyP0p3ikZ0whICRoNJIOppZNeB0n5KHtXDFlxTalTlNlblA3BHl9aDDSSpJB6wenw1p4ns/jHXSFt3mcxIy+R3gcKvPZzsKhtXePKS4bZRBAT8bnrwro5UvuR47EvZ4h9xCFAZEAWFtBYH5zvvVnxjfdu94FWULpJmPXdRmN2Y20S42hKSTJUEwfPiKquIx5L5bPDMSdCOVeLnWf3lJdLwehjWOUK6HS3GiSCtP+Y/OoMZim0IJDiQOAVOblAvVYw2Fa745krdSZgJKkpBOicwgyTbXeKsGG2Xh++KA0hOREqS4VKUFEiCAomUxN43g12zbxRWWTpd/P8AB4q9Nly5GlJ1fX2GaNnq7xC0mU5ZIm2a27fpY7ooLtSvIlKZAzTJ5Ji0dSKNTie7UEJIKiLJ49PQ+lVrtctwOJStQkJkAe7Mz5wBfd1NcPp82XPmblFce/58HsZMSxwSTFmDxTinm2mwCC4mQq8kEEq5QAZjhvq/bb2YlTbcSk5hKbb+lv8AdVn9nezA46vEEHI1CUDiogyfIR/lXoG0lgwmDJUkp5wQTFerJ8euzjSsUYBAKSQnwjwgxrG/pM1BiGGVAocSkzvMZhzB1BqznCJywBf0j0qJGyQNVm5kxbyqc4y1xVjxkvLo8xQyW3+6cUQJsob0nfcRf5iKueFwLjbRkBSQoZSBBjgExGtyRRu1OzzKylShITrxN511Aqd7aLacjRUAojwImDYbuUUuFuDuSSf+CuWSmkltE2BGZshUFJ3zI8jx6cKQ7U2OHs2GceWjOczbgCb2jKoWCt2kHgRRuJ2wlK+7GiRK4shtMTKlaC14pc/il4hEoaUqLgnwi/WKrKSm7S/4RScexDguyi8I4VKxiMySMqULHiGpzoUZHSYGsmnjw/hyV+OSSEqSSQP6T1041XsStaiEqlJJNtANRaNevKn+A2eCglSh4RJKumtRlK5UiiVK2MDshhwBJbQoHeZJk8Dx866YWhlPdkf9NOpInLokk2JAFvhTDBYINhKzK3AJCbwnNaeRifU0HtllLik3MkZjF8pHXr0ubVWmo9E7TZ5ttzFrcxZDQMOaAWvcFXLjV02OheEaDayXCQClMzfUyTOlawGy0IUp1YT3kZRl90GDpxPy+LnZ+HSUhWuUiOmn50G3So2r2I8RtpxSioAg6Dgn1rnAvL8UZnHDrqeYE6J86Y7bbaEmLxJCYlQmLT8f0oPZWLdKYhSG0qlPMRePvfSU12Pa8BOE2OUlSvYzlKik3g3zetvSjXcK2fCsZuUTpyrlW0UhUKUlJiwJ089KjVtBgryyCQJJJt676dNCtMELDX4j5WrKCxj4UtRS43BNvGK1R5h4FIxDS8qAG5sAYN9NQdb9Kic2apwTkXI42UPPRQ636U3TjEfjH+VdfvCUiST5Caq/qM33FHqy+h4YrUmRYBt9tKQSgQbEkSPRR9L0Ti284I7xlLipiZTmtcgm2b41yvExHgJzEa21rrYm0EKxaUOtIVGbITMhQsSJtMA7t1uNc8ZynJukS9R6SGGC27elZJgcInDNI8cxBICpSVkyogaGCPhSfaTn8RCm7uEErQSL3MGRoQLTvEa17E2lr2u7bmJnImSPS8V5H2r2W23ii22nU5hb2Um45QLp/t51WMdnmyY0Y2kixJnKiTmSSQdMpHEXuJo3ZbpcczmAn3RG7iaS4DZea8TMXJq27MwRTG7ypHFIe2PsKgRoKPSYFBMN0VlqiJsixCjB05D71qo4vZrSHCtzxA2bQAd+63tXm24VbFtjzpHtfCpKkORKmySk77gpV8CfSkyLV/A0e6Ko1sjDoKQ668tWYZUHwAKnUxcRxtTZnMYWXAXDYkptEmLjlFIe1zLjj8IIyFCSoSkGb2MngE250swWxcakpcLLiWiRmKYkCdcoObnpFq5XgWSDUptv+P7UW5yxtSUaX4/2ei4dIabW8oha5CZA9lJKQQLm958hVI2q+cRjQHCAlxxCCBPsZwnja191W0PMowq8oWpOQk51ElRTJtGhkRIrzslwkuKnOTMgXncEjjVPSqoIlklylZ7m3h22PA0hKE8BAHoOlBDFZn0kKuqQE8YTJotbnfIRIhYCc6YNiU3TpoCdRwqBWzyClWW6bjdB4jn6VSV+OjRryMUuGuP3sH3h6j0qXAA+IlX6fH7ipXG05gqJVxi/rVVLVkmgXEIUptQAMwd1VNzsoVPB5feASmR4iZB3RdI0vNoq+Niup51CeHlNTbfVV4KwycVSQsBCItGm76m9YlySb0wdSCL3pc5ggbiQfvdVJNroRU+xXtXBIcVCkiSRCpgjjPGl6l5F5Cnw5kiVeVzGom9MHNmuk5gRIO8/KN3pQONwyjmbWoadb6iCa5Mbyyk+SrevwXlxjHTst+ESmDYTvvM9aSuONjEKKkyDbkIEk8JrlkHDtpV3neEgQkJgq5klRtzpe3g8skrJKiozqVSsqJIjyt8K7E9dEGhtjMKh1tTRAAItyM2I5g76p7eKdbFzlcbJSpOmYDUieUHzFMtsY91tA7tsLzHLOb45eXnSfE4rKJcc7xwiMqSTl5SdL+VqWTTGiqG2OxJcyJzEqUAnKnUmCSozokXPlXAxZUpSG0ewTmAieG/jrNcYE/uza3nSO9cshG8DXLy59Kru3ybuJUpLsZ05TBISZix1InhQ43ph/BeNnYIET3fdnUqUcx++tErWySUpQlRSJUrKITyHE200+VUTs32ge8XfqUpPhOUqMgE68+h9atrO1mmHClSmwkpUZJAiBIF+NxzmjXF0ZJy2TNlJFm2t+qb677VlVv8A5kaN+9T/AJVql5P4Ke1IS7Q7POsuQU5kmSFp0IGs/hjn6mindjvFsENKIjSL+mtPMe6XBJKShEqAjxEwIg+7FzobgUTgdoOhtK1pJRvPvD+qNeo4UPbi/J2v6tlSVxWvIgwOxHX8pQAEiPEqwtwtJNEK/Z6Q4F/vPiCs3hbiDM65v98KumCxSQ3nT4rwkD3lHd98DXWGaUDCiCrVQG7qd1PBcOjn9T6uWer6XRpGEWEJghSkxO6dxtMVRO32Fy4hlzLqlSD5SofM16ODwvxM2qv9rtnB9qU+2ghQ5xII/wASr4U8dM45bEGxEyPpNWRlEb/hVV2JIIifIkCrfhDIufjRoLZO3E61MpV6hSQDW3HKVaCyJxQG8zyoF5REk8LT98YopayKXYlc3J8q0mZIqKmsi1EnSZJ06nyohzaeHyBL7q4RfK2JzCD4QSoACTw1oxL0PKbWAO8FjHIVR9q4MMurCkiJkD5jy8t1JhwNS53X4OjP6tSjwr+Rzi9psYhKu7LjWihmUkieSEpGvI69aP7IbDadfDhcCw3DgQAZkG2c+ykZgSEgmYvFUxC0GEg2vIMDyv8ArXqfYLBhrC58pzOqKx/Snwp8vaP91dE6jE44u2XLDZUuKWAZIAvy3jrb0o9CwaVsExOlEAR19KkhmHLCd8VpKRuihkL/AJYqTKk6a0wCZSKwSKGzlNjUWIxJFgfU/rWugUEPYiPuaHOKOsp6UGvGqSbwTUTz7ZEkkHeKm5D8SR3H5ZKoIHC36VXdpbRC1koBBMDUR1iPrXOPxSrhFxzi1QYDDonMtUq3AXqPN3oqoqthzSlACTJgSTwA0itbR2gptlxzuyopTZIsDuAO+ONKe1Dy20ocQFhs5gpYN8xgAHeJv8utUe2ityM6lEDQKJPoDp1qsboeGJTV2XXYu3m8QjugENKCYKXDNydEix1Jg350rxW2m2nCltIGVUE5bFQjQn5j1qutPFBziUkEEXJM9JrHns11XJuR1oya+CuP0q5W3aDcTilOqCy4SoGRe3+6ixG0SFpWMqVISUyBZQMRIMzEGP6jS8lKQYMDnSnEvKJGVRg8ORjWjGDbLZHjgraQ3WtSjJWRP4QB6nQVpLIuLZDc3k+e89PjSV0lHvyo7zePMm3lWjtFxFypJ+Pw0qrxSIx9Zj+CwZmvw/L86yhWdtJyiYnfasqfGXwdPv4/lF6S081IcaUU2iLnpCZMU/xqAhppvMG8yhMCZgFRSEiSZMUcwSq9hxtXGMRmFtR7J5628wPSlikjym2Dt4ReYKaSWrEEn3uqPd6zNNcI4ckKbyEGIBsf5ga02+MoJtIBIO6dx58qhS9Jkep+lP0Ioq7QWtQ5ffzpfinM0iZ5AfW/yogonWen5n6VwhOsD0EAUHsboqGGwZbcUFZRcx0m28Wqw4YmNU34f7qPabSZCyqIteL39RUaDwVP31rIbtDDP69ajWved1BF2uFrPHj50G6DRLiHp0pdjXMt5iuHtooBCAQSohIvqTy1psjZjPtuysRJzKhItMwI+M0tNgbSPPdtY85gRqDIjW1NttbAQ9h04lKwVwApIuJPObTardtnZ+HcaAKAlCcqh3aQk8gDukGPOuGNmtdyG0+EiPCk2Ez/AJG2p1ijjzqWo7oHt2rejzPEdl3EpVkdQtxEZkBJEFWiQuSCfITXp+yQW2mkGICEgxcJOUAjpI1pa2gtrX3qkD2QlQEFXhupR4jSnOzyktpgg66bxmNPklyqhIKm0w/DOZZB42n7+5opEG5FIMe2pKgRwt97q6w+0FaRfff41H3KdMrwtWWUIBtI6Vp15CNVDpSVTynRkDmSNYsT05VyjZd/+oVcyTTe430heC8jB3ajY60qexyDcqFEL2KeVcjYPAj0/Wg+TCuKFz+02gDmWBS/DYteIVlZbOTQuLEA/wBI1V8Kdr7NJJBXChvTTJKQiAgWFuArcfk1/BVcZsN2QRkWP5ioeWUEDzqXAYQt3WR0QmAOo9o+pq2rQINxNBuNNj3k5oJAkSYrSjXQVKwfDttuN5fCttY3QUkH514xtVamXXWSjxNrUgEjcDY+Yg+dew4ZaFnu0jIRccDeT01mvPf2l7PKMWHckhxtBURuUCUmeoCabE0x4ycXV0VVvGJ972uZ+VEpxEgRvt/s0CnENg6cNRVl7PbGGLJ/jZUAwMqRKjE5ZJgHyNUkl8HTHIortfwD7EwqX3ilRGVCc0fiIIHoJFSdocIVOLLbUISkBUAxMEm55VbNmbHaYcypKUEpNyCVkWzCdPgN1JdsbRbdWUttrdUCRPhCeBCRvnmb+lLGdO0cmWTndsXdmuz7bqc2IK0NEw2sRJN5AkHNp86bY7sEkGWnkrO5K2yk+ZSVeuWlGJQ5hyhLbiktTnIJzhtXEchcEjeabYdb76BONCgfdRE20CrzTvJJOyKxroV/8kYpV+5Tf/7B+VaqzYftK62kIzk5ZGg49Kyt70je0i14Z4d3BOtTLxiQOQ37h50Gk/hbFt4At0rHMMpQlZj5+XCo0+ymjrCrKkglQWeI3wdaMQsedJ9lugJKfwrcH/efpTNKpAtVBSVT27/Z/KuHFH7MDzO+t6deWv6VGrn8d351gkL48BJ0g/LdVYVjwNwH3yqw4lBcBSJggieRESKo6cG2HFIUXV5VEeIkCJ1ACY3byaVtDRTYedrzYH00FT4Ft3EEBtAN/EVAkAcIBF+tOdn9m2loSoHKFeIpPiIngq0HXcdadbL2GhlwrSpRsUhJiEgkEwB0Fzeh7bk/sFzSFbXYtoKQt11ZUnQDKgAyDYAch6U/c2Q2oCQTBBHiOouDbneudsbEYxSMj7YXrlVAzJ5pMSKV7O7HNNSQ7iCiZAS6tKUifZKUEW5+tWcbjxfRz8t2E4vZbhbyJWmxKgFAm8zBvx31VDttSA6UtHO2pSVb0hQJEzOliY1p3+0BOJDbamFL7vxd4W1QQIBCpBkpsfWvMGu0zjIW2kIKVKlWYSSYiZ8qjH08YaiqKrK62HqfcdV43PEVSpSjOo1tIjfA4Vbeyr9lsLstlZBvuV4godZVXnjGOLqSLISmTI1uZyg6xO6d9F7F2q3h30KklB8Ln9J1PkRm8udPLHoXnbtnrqmkuIynhqOW+kilrbWWzB/Co7/OmOHUJAKiJ9lQ0M8TpPzmh8ewuYUnMNyh7Q+hrmybRaGmBuqVNwRzFEMY1Vrq1tapMOuBCiFc9D0NtaKaXeQjzP050sVfkLYeMWrXSh14pc+1UBSo3J6XrCvjHn+lVtiUTuLWRb1NBPASJV4uE61xiJIAzwDuv86zDuIUoZTKhxHypXK2FLQe3i1J0AJ4wf8AVDJWoyChJuYsJAM74o4IT7yr/e761KI4QOlU432LdCfDbNcS4HM0wdCNBHzidKQ9pznfJ1ypykcQb+tXVSiLwE8oueg+tUrHqzOrIG+PQAfSpTSgqQ8P3PZWMZsNtYKk8LR8qN7PoQy2ttQF1ZiSJ5W4EQN2+mSmiLpGuqePMcDS/aLZIAAVJiAJk+XnQWVtU+hnFX9yDa22FOy22laAbEnUgGcoAm2+uW1htCIbUT70JUIHmBJPGi8P2VxbhzeFsa+M+lkyfWKEx+IxeCPdvBJQfZVEgjWEqtfkb1sefFOXGMk38WLKEltnWK2hhlJKVtQnQq1IMGMw9odT60kYYQV93IsJbUPeHDjmojaS0E50iUuJ8So03ieBzSKQLQoxlPsmQZj0rsjHRGTLR+6vH2XbbrE/GL1lWHZuGQ40hcJVKRJneLEeRBHlWVLk/gpSLxisU22PD4juAE/oKBDynPFP6Vta5MkQPxHytJ18vSttuagAq6/p9aaWxEKcB7SxvC1T5wfrTVC401oHEMw4tfurI8iBBHwHxqdpUaR1NAPgJzxynhrWIbkXsOH58a22N5uanTz+/wBOVYxEuAI1G/ieXnSna+HKUlwNpVIhQvIPEEagR8qdZRMny5cTUhTIMix3Hh/qsEQ7BxixZZIJMwTpyHKrGjFHjVaxWGDTnhByEDKOHEX4Wo9rEymcsJjnP30oxk1oEo3seHFnTlrSrGYgI8V+oMH1onCt5gFKsNY30PtZKVDLGto61VfLJfZEOJVnbU33ii2oHMLTBsQFXvXmO19hrS6oJdlGqSq9r259Yq5r2c81GVwqBGkSR8uHOgEYVOfO4u44iCOV9350s8qvQqVL/pTl7EeIsokdCJ8qna7KOKElUeVehs5FCZE9a6XlECRwFcsvUyujphii1dm9id4GG0R3gSkJIPFEJPrrU7mKUDCZHEHUcufWosPilMhUNlaSZsQCDxANiDbfuoTG7fQbFCkK4kGPWKnyTVj00yR1+TmJmm2GxBKR9dar2BWp45kQBfxKICbcCdfKnyMC5xTMAzP6U2PHLsE5LoNDp3ia0pSDUKcM+NMiupP/AOakS26TCkpH9wq3GXwTtHKkNxoTzia2nBpSklMZt2o/UVpxpxMwkmLwkyfQXPlXCVuKAIbUQYiSkHrBVbzvS8X5QeS+QvBoSACogr4x8LUT34Ol6CCHY/6R6Sn86CUMWtRSlruxuUsjp7KSSfOKdKS8AbT8h+0MQEIKlK0BmPoPhVQwqCetNMXsh5Lai4UqlQzKvJE7p0vl0NR4fKggm0ek1z5b5JMrjqrQZhsAge3qQSBfdQ//AAVRUlxsGxnKfod+786YJdKxAMGjcNifAUSASICvzFW4Y5QcGu/JGTyc009eV/sCwuL91VjU+KwrbqChaQtKtQfu3WsxGGTkCYKnBqRYDda1h+uk0O62pIB1tu1HOK+c9X9NyenfNdfPwd+P1GLNJxT2v7FdX2Wdw+dbP8RhXtNqgqTreTu8rzcb6SYlltdmSgTZTa5zN+kpUngZ9davzG0Sm8yI1quY7DoLjim2ktqUQVqAjNG61uc/nXv/AEecvVUpp67fhnm/Ucn6Zaq30inu9n3wTlQkjd4gPhurKtGRQ99fwNbr6P8AR4/ueF/6OX4RYVrSo71HnOlgT+k0QAMgIsOQif061lZXhn0BG8PBHC9RNGsrKVDBKFVMF7/QfU1lZTANtXM/ZP0qUrlQTx+/lWqymADbVwqXG1Akgi4ItBMaRpah8GlLaT4lK3gquYtE2isrKfEv3An/AEhKcUtaghABUb8ABOv6CoMXj2mCrNmccFlAWA8yPlWVlUUU5bDBaZrFsnMlYVKFDMjcYI0POoyAdb1lZXlZf6joh0c/uyT7qfMVtLCR7IA6CK3WVKw1swoqF5sQZE1lZRCb7PY1K3XASSAlKcqkgBABMAAEgi43zVpKRERHCAPrWVlepi3E4p9m2lWnxEbrx/qoiVTISL8TOlZWU3kUiUlcxnAn8KY+M6VOF8bEanj8DatVlZGJkOESTvqUQdCRWVlExBtFJDS/CFW0mLbzVTU0FflWVlcXqu1+DpwdMiDC0GUG34SbeXCjcPikr4g761WVDHJlZRQ4RtAJTKSdBrx4xS5b5UTJMnfWVldc/wB64vo54JRehYpa1JKXkoCsxHh3x7xI+VB/voCrmxHPd/bwrKyvd9D6fHixKMUfOfUc05ZW2/NAa1Nyf4n/AGH86ysrK9Hijy/c+x//2Q==',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9v8XeKcA4Mz-AqjiazV4Jph2iKitzUEsIQ&usqp=CAU',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://ejatlas.org/media/conflict/wastepickers-in-tunis-struggle-forth-in-post-revolution-tunisia/16743753.jpg',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIeE0mlQvx7gJVEhNCgT7bNJdgCARZ1E9lQk8u_t1JYDfSLhWLAUqzaLX4GalyhrFJk0&usqp=CAU',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCMG-xToZ0rSbkqYcOvd3Gm_z1ihqFZum1MT1zsTEa1Ol_4hBLq5dwrLHiARATyxAGy4&usqp=CAU',
    title: 'Bike',
    author: '@southside_customs',
  },
];











































/*import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}*/