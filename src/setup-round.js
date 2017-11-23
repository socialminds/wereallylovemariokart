// Libs
import React from "react";

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Setup Round</h1>
        <section id="people">
          <div id="holder_Martin" className="person dropbox">
            <div className="person draggee"><strong>Martin</strong></div>
          </div>
          <div id="holder_Alex" className="person dropbox">
            <div className="person draggee"><strong>Alex</strong></div>
          </div>
          <div id="holder_Dan" className="person dropbox">
            <div className="person draggee"><strong>Dan</strong></div>
          </div>
          <div id="holder_Lauren" className="person dropbox">
            <div className="person draggee"><strong>Lauren</strong></div>
          </div>
          <div id="holder_Dave" className="person dropbox">
            <div className="person draggee"><strong>Dave</strong></div>
          </div>
          <div id="holder_Mike" className="person dropbox">
            <div className="person draggee"><strong>Mike</strong></div>
          </div>
          <div id="holder_Doris" className="person dropbox">
            <div className="person draggee"><strong>Doris</strong></div>
          </div>
          <div id="holder_Brandon" className="person dropbox">
            <div className="person draggee"><strong>Brandon</strong></div>
          </div>
        </section>
        <section id="players">
          <article id="player1" className="player">
            <div className="person dropbox"></div>
            <div className="avatar dropbox"></div>
            <select className="vehicle light" >
              <optgroup label="Light Karts">
                <option value="Standard Kart S">Standard Kart S</option>
                <option value="Booster Seat">Booster Seat</option>
                <option value="Mini Beast">Mini Beast</option>
                <option value="Cheep Charger">Cheep Charger</option>
                <option value="Tiny Titan">Tiny Titan</option>
                <option value="Blue Falcon">Blue Falcon</option>
              </optgroup>
              <optgroup label="Light Bikes">
                <option value="Standard Bike S">Standard Bike S</option>
                <option value="Bullet Bike">Bullet Bike</option>
                <option value="Bit Bike">Bit Bike</option>
                <option value="Quacker">Quacker</option>
                <option value="Magikruiser">Magikruiser</option>
                <option value="Jet Bubble">Jet Bubble</option>
              </optgroup>
            </select>
            <select className="vehicle medium" >
              <optgroup label="Medium Karts">
                <option value="Standard Kart M">Standard Kart M</option>
                <option value="Classic Dragster">Classic Dragster</option>
                <option value="Wild Wing">Wild Wing</option>
                <option value="Super Blooper">Super Blooper</option>
                <option value="Daytripper">Daytripper</option>
                <option value="Sprinter">Sprinter</option>
              </optgroup>
              <optgroup label="Medium Bikes">
                <option value="Standard Bike M">Standard Bike M</option>
                <option value="Mach Bike">Mach Bike</option>
                <option value="Sugarscoot">Sugarscoot</option>
                <option value="Zip Zip">Zip Zip</option>
                <option value="Sneakster">Sneakster</option>
                <option value="Dolphin Dasher">Dolphin Dasher</option>
              </optgroup>
            </select>
            <select className="vehicle heavy" >
              <optgroup label="Heavy Karts">
                <option value="Standard Kart L">Standard Kart L</option>
                <option value="Offroader">Offroader</option>
                <option value="Flame Flyer">Flame Flyer</option>
                <option value="Piranha Prowler">Piranha Prowler</option>
                <option value="Jetsetter">Jetsetter</option>
                <option value="Honeycoupe">Honeycoupe</option>
              </optgroup>
              <optgroup label="Heavy Bikes">
                <option value="Standard Bike L">Standard Bike L</option>
                <option value="Flame Runner">Flame Runner</option>
                <option value="Wario Bike">Wario Bike</option>
                <option value="Shooting Star">Shooting Star</option>
                <option value="Spear">Spear</option>
                <option value="Phantom">Phantom</option>
              </optgroup>
            </select>
            <div className="transmission disabled">
              <input type="radio" name="transmission1" value="auto" id="transmission1_auto" disabled="disabled" />
              <label htmlFor="transmission1_auto">A</label>
              <input type="radio" name="transmission1" value="manual" id="transmission1_manual" disabled="disabled" />
              <label htmlFor="transmission1_manual">M</label>
            </div>
          </article>
          <article id="player2" className="player">
            <div className="person dropbox"></div>
            <div className="avatar dropbox"></div>
            <select className="vehicle light" >
              <optgroup label="Light Karts">
                <option value="Standard Kart S">Standard Kart S</option>
                <option value="Booster Seat">Booster Seat</option>
                <option value="Mini Beast">Mini Beast</option>
                <option value="Cheep Charger">Cheep Charger</option>
                <option value="Tiny Titan">Tiny Titan</option>
                <option value="Blue Falcon">Blue Falcon</option>
              </optgroup>
              <optgroup label="Light Bikes">
                <option value="Standard Bike S">Standard Bike S</option>
                <option value="Bullet Bike">Bullet Bike</option>
                <option value="Bit Bike">Bit Bike</option>
                <option value="Quacker">Quacker</option>
                <option value="Magikruiser">Magikruiser</option>
                <option value="Jet Bubble">Jet Bubble</option>
              </optgroup>
            </select>
            <select className="vehicle medium" >
              <optgroup label="Medium Karts">
                <option value="Standard Kart M">Standard Kart M</option>
                <option value="Classic Dragster">Classic Dragster</option>
                <option value="Wild Wing">Wild Wing</option>
                <option value="Super Blooper">Super Blooper</option>
                <option value="Daytripper">Daytripper</option>
                <option value="Sprinter">Sprinter</option>
              </optgroup>
              <optgroup label="Medium Bikes">
                <option value="Standard Bike M">Standard Bike M</option>
                <option value="Mach Bike">Mach Bike</option>
                <option value="Sugarscoot">Sugarscoot</option>
                <option value="Zip Zip">Zip Zip</option>
                <option value="Sneakster">Sneakster</option>
                <option value="Dolphin Dasher">Dolphin Dasher</option>
              </optgroup>
            </select>
            <select className="vehicle heavy" >
              <optgroup label="Heavy Karts">
                <option value="Standard Kart L">Standard Kart L</option>
                <option value="Offroader">Offroader</option>
                <option value="Flame Flyer">Flame Flyer</option>
                <option value="Piranha Prowler">Piranha Prowler</option>
                <option value="Jetsetter">Jetsetter</option>
                <option value="Honeycoupe">Honeycoupe</option>
              </optgroup>
              <optgroup label="Heavy Bikes">
                <option value="Standard Bike L">Standard Bike L</option>
                <option value="Flame Runner">Flame Runner</option>
                <option value="Wario Bike">Wario Bike</option>
                <option value="Shooting Star">Shooting Star</option>
                <option value="Spear">Spear</option>
                <option value="Phantom">Phantom</option>
              </optgroup>
            </select>
            <div className="transmission disabled">
              <input type="radio" name="transmission2" value="auto" id="transmission2_auto" disabled="disabled" />
              <label htmlFor="transmission2_auto">A</label>
              <input type="radio" name="transmission2" value="manual" id="transmission2_manual" disabled="disabled" />
              <label htmlFor="transmission2_manual">M</label>
            </div>
          </article>
          <article id="player3" className="player">
            <div className="person dropbox"></div>
            <div className="avatar dropbox"></div>
            <select className="vehicle light" >
              <optgroup label="Light Karts">
                <option value="Standard Kart S">Standard Kart S</option>
                <option value="Booster Seat">Booster Seat</option>
                <option value="Mini Beast">Mini Beast</option>
                <option value="Cheep Charger">Cheep Charger</option>
                <option value="Tiny Titan">Tiny Titan</option>
                <option value="Blue Falcon">Blue Falcon</option>
              </optgroup>
              <optgroup label="Light Bikes">
                <option value="Standard Bike S">Standard Bike S</option>
                <option value="Bullet Bike">Bullet Bike</option>
                <option value="Bit Bike">Bit Bike</option>
                <option value="Quacker">Quacker</option>
                <option value="Magikruiser">Magikruiser</option>
                <option value="Jet Bubble">Jet Bubble</option>
              </optgroup>
            </select>
            <select className="vehicle medium" >
              <optgroup label="Medium Karts">
                <option value="Standard Kart M">Standard Kart M</option>
                <option value="Classic Dragster">Classic Dragster</option>
                <option value="Wild Wing">Wild Wing</option>
                <option value="Super Blooper">Super Blooper</option>
                <option value="Daytripper">Daytripper</option>
                <option value="Sprinter">Sprinter</option>
              </optgroup>
              <optgroup label="Medium Bikes">
                <option value="Standard Bike M">Standard Bike M</option>
                <option value="Mach Bike">Mach Bike</option>
                <option value="Sugarscoot">Sugarscoot</option>
                <option value="Zip Zip">Zip Zip</option>
                <option value="Sneakster">Sneakster</option>
                <option value="Dolphin Dasher">Dolphin Dasher</option>
              </optgroup>
            </select>
            <select className="vehicle heavy" >
              <optgroup label="Heavy Karts">
                <option value="Standard Kart L">Standard Kart L</option>
                <option value="Offroader">Offroader</option>
                <option value="Flame Flyer">Flame Flyer</option>
                <option value="Piranha Prowler">Piranha Prowler</option>
                <option value="Jetsetter">Jetsetter</option>
                <option value="Honeycoupe">Honeycoupe</option>
              </optgroup>
              <optgroup label="Heavy Bikes">
                <option value="Standard Bike L">Standard Bike L</option>
                <option value="Flame Runner">Flame Runner</option>
                <option value="Wario Bike">Wario Bike</option>
                <option value="Shooting Star">Shooting Star</option>
                <option value="Spear">Spear</option>
                <option value="Phantom">Phantom</option>
              </optgroup>
            </select>
            <div className="transmission disabled">
              <input type="radio" name="transmission3" value="auto" id="transmission3_auto" disabled="disabled" />
              <label htmlFor="transmission3_auto">A</label>
              <input type="radio" name="transmission3" value="manual" id="transmission3_manual" disabled="disabled" />
              <label htmlFor="transmission3_manual">M</label>
            </div>
          </article>
          <article id="player4" className="player">
            <div className="person dropbox"></div>
            <div className="avatar dropbox"></div>
            <select className="vehicle light" >
              <optgroup label="Light Karts">
                <option value="Standard Kart S">Standard Kart S</option>
                <option value="Booster Seat">Booster Seat</option>
                <option value="Mini Beast">Mini Beast</option>
                <option value="Cheep Charger">Cheep Charger</option>
                <option value="Tiny Titan">Tiny Titan</option>
                <option value="Blue Falcon">Blue Falcon</option>
              </optgroup>
              <optgroup label="Light Bikes">
                <option value="Standard Bike S">Standard Bike S</option>
                <option value="Bullet Bike">Bullet Bike</option>
                <option value="Bit Bike">Bit Bike</option>
                <option value="Quacker">Quacker</option>
                <option value="Magikruiser">Magikruiser</option>
                <option value="Jet Bubble">Jet Bubble</option>
              </optgroup>
            </select>
            <select className="vehicle medium" >
              <optgroup label="Medium Karts">
                <option value="Standard Kart M">Standard Kart M</option>
                <option value="Classic Dragster">Classic Dragster</option>
                <option value="Wild Wing">Wild Wing</option>
                <option value="Super Blooper">Super Blooper</option>
                <option value="Daytripper">Daytripper</option>
                <option value="Sprinter">Sprinter</option>
              </optgroup>
              <optgroup label="Medium Bikes">
                <option value="Standard Bike M">Standard Bike M</option>
                <option value="Mach Bike">Mach Bike</option>
                <option value="Sugarscoot">Sugarscoot</option>
                <option value="Zip Zip">Zip Zip</option>
                <option value="Sneakster">Sneakster</option>
                <option value="Dolphin Dasher">Dolphin Dasher</option>
              </optgroup>
            </select>
            <select className="vehicle heavy" >
              <optgroup label="Heavy Karts">
                <option value="Standard Kart L">Standard Kart L</option>
                <option value="Offroader">Offroader</option>
                <option value="Flame Flyer">Flame Flyer</option>
                <option value="Piranha Prowler">Piranha Prowler</option>
                <option value="Jetsetter">Jetsetter</option>
                <option value="Honeycoupe">Honeycoupe</option>
              </optgroup>
              <optgroup label="Heavy Bikes">
                <option value="Standard Bike L">Standard Bike L</option>
                <option value="Flame Runner">Flame Runner</option>
                <option value="Wario Bike">Wario Bike</option>
                <option value="Shooting Star">Shooting Star</option>
                <option value="Spear">Spear</option>
                <option value="Phantom">Phantom</option>
              </optgroup>
            </select>
            <div className="transmission disabled">
              <input type="radio" name="transmission4" value="auto" id="transmission4_auto" disabled="disabled" />
              <label htmlFor="transmission4_auto">A</label>
              <input type="radio" name="transmission4" value="manual" id="transmission4_manual" disabled="disabled" />
              <label htmlFor="transmission4_manual">M</label>
            </div>
          </article>
        </section>
        <section id="character_pool">
          <div id="holder_baby_mario" className="dropbox avatar">
            <div className="avatar character draggee baby_mario">
              <div><img src="_base/img/character_avatars.png" alt="Baby Mario" /></div>
              <label>Baby Mario</label>
            </div>
          </div>
          <div id="holder_baby_luigi" className="dropbox avatar">
            <div className="avatar character draggee baby_luigi">
              <div><img src="_base/img/character_avatars.png" alt="Baby Luigi" /></div>
              <label>Baby Luigi</label>
            </div>
          </div>
          <div id="holder_baby_peach" className="dropbox avatar">
            <div className="avatar character draggee baby_peach">
              <div><img src="_base/img/character_avatars.png" alt="Baby Peach" /></div>
              <label>Baby Peach</label>
            </div>
          </div>
          <div id="holder_baby_daisy" className="dropbox avatar">
            <div className="avatar character draggee baby_daisy">
              <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
              <label>Baby Daisy</label>
            </div>
          </div>
          <div id="holder_toad" className="dropbox avatar">
            <div className="avatar character draggee toad">
              <div><img src="_base/img/character_avatars.png" alt="Toad" /></div>
              <label>Toad</label>
            </div>
          </div>
          <div id="holder_toadette" className="dropbox avatar">
            <div className="avatar character draggee toadette">
              <div><img src="_base/img/character_avatars.png" alt="Toadette" /></div>
              <label>Toadette</label>
            </div>
          </div>
          <div id="holder_koopa_troopa" className="dropbox avatar">
            <div className="avatar character draggee koopa_troopa">
              <div><img src="_base/img/character_avatars.png" alt="Koopa Troopa" /></div>
              <label>Koopa Troopa</label>
            </div>
          </div>
          <div id="holder_dry_bones" className="dropbox avatar">
            <div className="avatar character draggee dry_bones">
              <div><img src="_base/img/character_avatars.png" alt="Dry Bones" /></div>
              <label>Dry Bones</label>
            </div>
          </div>
          <div id="holder_mario" className="dropbox avatar">
            <div className="avatar character draggee mario">
              <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
              <label>Mario</label>
            </div>
          </div>
          <div id="holder_luigi" className="dropbox avatar">
            <div className="avatar character draggee luigi">
              <div><img src="_base/img/character_avatars.png" alt="Luigi" /></div>
              <label>Luigi</label>
            </div>
          </div>
          <div id="holder_peach" className="dropbox avatar">
            <div className="avatar character draggee peach">
              <div><img src="_base/img/character_avatars.png" alt="Peach" /></div>
              <label>Peach</label>
            </div>
          </div>
          <div id="holder_daisy" className="dropbox avatar">
            <div className="avatar character draggee daisy">
              <div><img src="_base/img/character_avatars.png" alt="Daisy" /></div>
              <label>Daisy</label>
            </div>
          </div>
          <div id="holder_yoshi" className="dropbox avatar">
            <div className="avatar character draggee yoshi">
              <div><img src="_base/img/character_avatars.png" alt="Yoshi" /></div>
              <label>Yoshi</label>
            </div>
          </div>
          <div id="holder_birdo" className="dropbox avatar">
            <div className="avatar character draggee birdo">
              <div><img src="_base/img/character_avatars.png" alt="Birdo" /></div>
              <label>Birdo</label>
            </div>
          </div>
          <div id="holder_diddy_kong" className="dropbox avatar">
            <div className="avatar character draggee diddy_kong">
              <div><img src="_base/img/character_avatars.png" alt="Diddy Kong" /></div>
              <label>Diddy Kong</label>
            </div>
          </div>
          <div id="holder_bowser_jr" className="dropbox avatar">
            <div className="avatar character draggee bowser_jr">
              <div><img src="_base/img/character_avatars.png" alt="Bowser Jr." /></div>
              <label>Bowser Jr.</label>
            </div>
          </div>
          <div id="holder_wario" className="dropbox avatar">
            <div className="avatar character draggee wario">
              <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
              <label>Wario</label>
            </div>
          </div>
          <div id="holder_waluigi" className="dropbox avatar">
            <div className="avatar character draggee waluigi">
              <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
              <label>Waluigi</label>
            </div>
          </div>
          <div id="holder_donkey_kong" className="dropbox avatar">
            <div className="avatar character draggee donkey_kong">
              <div><img src="_base/img/character_avatars.png" alt="Donkey Kong" /></div>
              <label>Donkey Kong</label>
            </div>
          </div>
          <div id="holder_bowser" className="dropbox avatar">
            <div className="avatar character draggee bowser">
              <div><img src="_base/img/character_avatars.png" alt="Bowser" /></div>
              <label>Bowser</label>
            </div>
          </div>
          <div id="holder_king_boo" className="dropbox avatar">
            <div className="avatar character draggee king_boo">
              <div><img src="_base/img/character_avatars.png" alt="King Boo" /></div>
              <label>King Boo</label>
            </div>
          </div>
          <div id="holder_rosalina" className="dropbox avatar">
            <div className="avatar character draggee rosalina">
              <div><img src="_base/img/character_avatars.png" alt="Rosalina" /></div>
              <label>Rosalina</label>
            </div>
          </div>
          <div id="holder_funky_kong" className="dropbox avatar">
            <div className="avatar character draggee funky_kong">
              <div><img src="_base/img/character_avatars.png" alt="Funky Kong" /></div>
              <label>Funky Kong</label>
            </div>
          </div>
          <div id="holder_dry_bowser" className="dropbox avatar">
            <div className="avatar character draggee dry_bowser">
              <div><img src="_base/img/character_avatars.png" alt="Dry Bowser" /></div>
              <label>Dry Bowser</label>
            </div>
          </div>
        </section>
        <form id="setup" action="/select-places" method="get">
          <fieldset>
            <legend>Number of Races</legend>
            <ul>
              <li>
                <input type="radio" value="2" id="race_count_2" name="race_count"   />
                <label htmlFor="race_count_2">2</label>
              </li>
              <li>
                <input type="radio" value="3" id="race_count_3" name="race_count"   />
                <label htmlFor="race_count_3">3</label>
              </li>
              <li>
                <input type="radio" value="4" id="race_count_4" name="race_count"   />
                <label htmlFor="race_count_4">4</label>
              </li>
              <li>
                <input type="radio" value="5" id="race_count_5" name="race_count"   />
                <label htmlFor="race_count_5">5</label>
              </li>
              <li>
                <input type="radio" value="8" id="race_count_8" name="race_count"   />
                <label htmlFor="race_count_8">8</label>
              </li>
              <li>
                <input type="radio" value="10" id="race_count_10" name="race_count"   />
                <label htmlFor="race_count_10">10</label>
              </li>
              <li>
                <input type="radio" value="12" id="race_count_12" name="race_count"   />
                <label htmlFor="race_count_12">12</label>
              </li>
              <li>
                <input type="radio" value="16" id="race_count_16" name="race_count"   />
                <label htmlFor="race_count_16">16</label>
              </li>
              <li>
                <input type="radio" value="32" id="race_count_32" name="race_count"   />
                <label htmlFor="race_count_32">32</label>
              </li>
            </ul>
          </fieldset>
          <input type="submit" name="submit" value="Next" id="next" />
          <table id="data">
            <tbody>
              <tr className="player">
                <th scope="row">Player</th>
                <td>
                  <select name="names[1]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
                <td>
                  <select name="names[2]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
                <td>
                  <select name="names[3]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
                <td>
                  <select name="names[4]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
                <td>
                  <select name="names[5]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
                <td>
                  <select name="names[6]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
                <td>
                  <select name="names[7]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
                <td>
                  <select name="names[8]" className="person">
                    <option value="---">---</option>
                    <option value="Martin">Martin</option>
                    <option value="Alex">Alex</option>
                    <option value="Dan">Dan</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Dave">Dave</option>
                    <option value="Mike">Mike</option>
                    <option value="Doris">Doris</option>
                    <option value="Brandon">Brandon</option>
                  </select>
                </td>
              </tr>
              <tr className="character">
                <th scope="row">Character</th>
                <td>
                  <select  name="characters[1]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
                <td>
                  <select  name="characters[2]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
                <td>
                  <select  name="characters[3]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
                <td>
                  <select  name="characters[4]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
                <td>
                  <select  name="characters[5]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
                <td>
                  <select  name="characters[6]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
                <td>
                  <select  name="characters[7]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
                <td>
                  <select  name="characters[8]" className="character">
                    <option value="---">---</option>
                    <option value="Baby Mario">Baby Mario</option>
                    <option value="Baby Luigi">Baby Luigi</option>
                    <option value="Baby Peach">Baby Peach</option>
                    <option value="Baby Daisy">Baby Daisy</option>
                    <option value="Toad">Toad</option>
                    <option value="Toadette">Toadette</option>
                    <option value="Koopa Troopa">Koopa Troopa</option>
                    <option value="Dry Bones">Dry Bones</option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Peach">Peach</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Birdo">Birdo</option>
                    <option value="Diddy Kong">Diddy Kong</option>
                    <option value="Bowser Jr.">Bowser Jr.</option>
                    <option value="Wario">Wario</option>
                    <option value="Waluigi">Waluigi</option>
                    <option value="Donkey Kong">Donkey Kong</option>
                    <option value="Bowser">Bowser</option>
                    <option value="King Boo">King Boo</option>
                    <option value="Rosalina">Rosalina</option>
                    <option value="Funky Kong">Funky Kong</option>
                    <option value="Dry Bowser">Dry Bowser</option>
                  </select>
                </td>
              </tr>
              <tr className="vehicle">
                <th scope="row">Vehicle</th>
                <td>
                  <select name="vehicles[1]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select name="vehicles[2]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select name="vehicles[3]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select name="vehicles[4]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select name="vehicles[5]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select name="vehicles[6]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select name="vehicles[7]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select name="vehicles[8]" className="vehicle">
                    <option value="---">---</option>
                    <optgroup label="Light Karts">
                      <option value="Standard Kart S">Standard Kart S</option>
                      <option value="Booster Seat">Booster Seat</option>
                      <option value="Mini Beast">Mini Beast</option>
                      <option value="Cheep Charger">Cheep Charger</option>
                      <option value="Tiny Titan">Tiny Titan</option>
                      <option value="Blue Falcon">Blue Falcon</option>
                    </optgroup>
                    <optgroup label="Light Bikes">
                      <option value="Standard Bike S">Standard Bike S</option>
                      <option value="Bullet Bike">Bullet Bike</option>
                      <option value="Bit Bike">Bit Bike</option>
                      <option value="Quacker">Quacker</option>
                      <option value="Magikruiser">Magikruiser</option>
                      <option value="Jet Bubble">Jet Bubble</option>
                    </optgroup>
                    <optgroup label="Medium Karts">
                      <option value="Standard Kart M">Standard Kart M</option>
                      <option value="Classic Dragster">Classic Dragster</option>
                      <option value="Wild Wing">Wild Wing</option>
                      <option value="Super Blooper">Super Blooper</option>
                      <option value="Daytripper">Daytripper</option>
                      <option value="Sprinter">Sprinter</option>
                    </optgroup>
                    <optgroup label="Medium Bikes">
                      <option value="Standard Bike M">Standard Bike M</option>
                      <option value="Mach Bike">Mach Bike</option>
                      <option value="Sugarscoot">Sugarscoot</option>
                      <option value="Zip Zip">Zip Zip</option>
                      <option value="Sneakster">Sneakster</option>
                      <option value="Dolphin Dasher">Dolphin Dasher</option>
                    </optgroup>
                    <optgroup label="Heavy Karts">
                      <option value="Standard Kart L">Standard Kart L</option>
                      <option value="Offroader">Offroader</option>
                      <option value="Flame Flyer">Flame Flyer</option>
                      <option value="Piranha Prowler">Piranha Prowler</option>
                      <option value="Jetsetter">Jetsetter</option>
                      <option value="Honeycoupe">Honeycoupe</option>
                    </optgroup>
                    <optgroup label="Heavy Bikes">
                      <option value="Standard Bike L">Standard Bike L</option>
                      <option value="Flame Runner">Flame Runner</option>
                      <option value="Wario Bike">Wario Bike</option>
                      <option value="Shooting Star">Shooting Star</option>
                      <option value="Spear">Spear</option>
                      <option value="Phantom">Phantom</option>
                    </optgroup>
                  </select>
                </td>
              </tr>
              <tr className="transmission">
                <th scope="row">Transmission</th>
                <td>
                  <input type="radio" name="transmissions[1]" value="auto"  />
                  <label htmlFor="player1_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[1]" value="manual" />
                  <label htmlFor="player1_transmission_manual">Manual</label>
                </td>
                <td>
                  <input type="radio" name="transmissions[2]" value="auto"  />
                  <label htmlFor="player2_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[2]" value="manual" />
                  <label htmlFor="player2_transmission_manual">Manual</label>
                </td>
                <td>
                  <input type="radio" name="transmissions[3]" value="auto"  />
                  <label htmlFor="player3_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[3]" value="manual" />
                  <label htmlFor="player3_transmission_manual">Manual</label>
                </td>
                <td>
                  <input type="radio" name="transmissions[4]" value="auto"  />
                  <label htmlFor="player4_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[4]" value="manual" />
                  <label htmlFor="player4_transmission_manual">Manual</label>
                </td>
                <td>
                  <input type="radio" name="transmissions[5]" value="auto"  />
                  <label htmlFor="player5_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[5]" value="manual" />
                  <label htmlFor="player5_transmission_manual">Manual</label>
                </td>
                <td>
                  <input type="radio" name="transmissions[6]" value="auto"  />
                  <label htmlFor="player6_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[6]" value="manual" />
                  <label htmlFor="player6_transmission_manual">Manual</label>
                </td>
                <td>
                  <input type="radio" name="transmissions[7]" value="auto"  />
                  <label htmlFor="player7_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[7]" value="manual" />
                  <label htmlFor="player7_transmission_manual">Manual</label>
                </td>
                <td>
                  <input type="radio" name="transmissions[8]" value="auto"  />
                  <label htmlFor="player8_transmission_auto">Auto</label>
                  <input type="radio" name="transmissions[8]" value="manual" />
                  <label htmlFor="player8_transmission_manual">Manual</label>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <button id="reset">Reset</button>
      </div>
    );
  }
});
