// Libs
import React from "react";

export default React.createClass({
  render() {
    return (
      <div>
        <h1>View Round</h1>
        <section id="graph" style={{"height": "290px"}}>
          <div className="graph_lines">
            <label className="zero">0</label>
            <div><label>25</label></div>
            <div><label>50</label></div>
            <div><label>75</label></div>
            <div><label>100</label></div>
            <div><label>125</label></div>
            <div><label>150</label></div>
          </div>
          <canvas id="curves" width="600" height="280"></canvas>
          <div id="player_1" className="player wario" style={{"top": "0px"}}>
            <p className="total">84</p>
            <div className="round" value="84" max="150" style={{"width": "338px"}}>
              <meter className="race race1 moo_moo_meadows" value="7" min="0" max="15" style={{"width": "28px", "left": "0px"}}>
              <strong className="place">
              5<span>th</span>
              </strong>
              <span className="points">7 points</span>
              </meter>
              <meter className="race race2 mushroom_gorge" value="4" min="0" max="15" style={{"width": "16px", "left": "28px"}}>
              <strong className="place">
              8<span>th</span>
              </strong>
              <span className="points">4 points</span>
              </meter>
              <meter className="race race3 coconut_mall" value="3" min="0" max="15" style={{"width": "12px", "left": "44px"}}>
              <strong className="place">
              9<span>th</span>
              </strong>
              <span className="points">3 points</span>
              </meter>
              <meter className="race race4 n64_dks_jungle_parkway" value="15" min="0" max="15" style={{"width": "60px", "left": "56px"}}>
              <strong className="place">
              1<span>st</span>
              </strong>
              <span className="points">15 points</span>
              </meter>
              <meter className="race race5 maple_treeway" value="15" min="0" max="15" style={{"width": "60px", "left": "116px"}}>
              <strong className="place">
              1<span>st</span>
              </strong>
              <span className="points">15 points</span>
              </meter>
              <meter className="race race6 moonview_highway" value="12" min="0" max="15" style={{"width": "48px", "left": "176px"}}>
              <strong className="place">
              2<span>nd</span>
              </strong>
              <span className="points">12 points</span>
              </meter>
              <meter className="race race7 gba_shy_guy_beach" value="4" min="0" max="15" style={{"width": "16px", "left": "224px"}}>
              <strong className="place">
              8<span>th</span>
              </strong>
              <span className="points">4 points</span>
              </meter>
              <meter className="race race8 mario_circuit" value="2" min="0" max="15" style={{"width": "8px", "left": "240px"}}>
              <strong className="place">
              10<span>th</span>
              </strong>
              <span className="points">2 points</span>
              </meter>
              <meter className="race race9 warios_gold_mine" value="7" min="0" max="15" style={{"width": "28px", "left": "248px"}}>
              <strong className="place">
              5<span>th</span>
              </strong>
              <span className="points">7 points</span>
              </meter>
              <meter className="race race10 snes_ghost_valley_2" value="15" min="0" max="15" style={{"width": "60px", "left": "276px"}}>
              <strong className="place">
              1<span>st</span>
              </strong>
              <span className="points">15 points</span>
              </meter>
            </div>
            <dl className="identity">
              <dt className="name">Mike</dt>
              <dd className="avatar character wario">
                <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
              </dd>
            </dl>
          </div>
          <div id="player_2" className="player baby_daisy" style={{"top": "70px"}}>
            <p className="total">83</p>
            <div className="round" value="83" max="150" style={{"width": "334px"}}>
              <meter className="race race1 moo_moo_meadows" value="5" min="0" max="15" style={{"width": "20px", "left": "0px"}}>
              <strong className="place">
              7<span>th</span>
              </strong>
              <span className="points">5 points</span>
              </meter>
              <meter className="race race2 mushroom_gorge" value="8" min="0" max="15" style={{"width": "32px", "left": "20px"}}>
              <strong className="place">
              4<span>th</span>
              </strong>
              <span className="points">8 points</span>
              </meter>
              <meter className="race race3 coconut_mall" value="7" min="0" max="15" style={{"width": "28px", "left": "52px"}}>
              <strong className="place">
              5<span>th</span>
              </strong>
              <span className="points">7 points</span>
              </meter>
              <meter className="race race4 n64_dks_jungle_parkway" value="7" min="0" max="15" style={{"width": "28px", "left": "80px"}}>
              <strong className="place">
              5<span>th</span>
              </strong>
              <span className="points">7 points</span>
              </meter>
              <meter className="race race5 maple_treeway" value="10" min="0" max="15" style={{"width": "40px", "left": "108px"}}>
              <strong className="place">
              3<span>rd</span>
              </strong>
              <span className="points">10 points</span>
              </meter>
              <meter className="race race6 moonview_highway" value="5" min="0" max="15" style={{"width": "20px", "left": "148px"}}>
              <strong className="place">
              7<span>th</span>
              </strong>
              <span className="points">5 points</span>
              </meter>
              <meter className="race race7 gba_shy_guy_beach" value="12" min="0" max="15" style={{"width": "48px", "left": "168px"}}>
              <strong className="place">
              2<span>nd</span>
              </strong>
              <span className="points">12 points</span>
              </meter>
              <meter className="race race8 mario_circuit" value="8" min="0" max="15" style={{"width": "32px", "left": "216px"}}>
              <strong className="place">
              4<span>th</span>
              </strong>
              <span className="points">8 points</span>
              </meter>
              <meter className="race race9 warios_gold_mine" value="15" min="0" max="15" style={{"width": "60px", "left": "248px"}}>
              <strong className="place">
              1<span>st</span>
              </strong>
              <span className="points">15 points</span>
              </meter>
              <meter className="race race10 snes_ghost_valley_2" value="6" min="0" max="15" style={{"width": "24px", "left": "308px"}}>
              <strong className="place">
              6<span>th</span>
              </strong>
              <span className="points">6 points</span>
              </meter>
            </div>

            <dl className="identity">
              <dt className="name">Lauren</dt>
              <dd className="avatar character baby_daisy">
                <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
              </dd>
            </dl>
          </div>
          <div id="player_3" className="player mario" style={{"top": "140px"}}>
            <p className="total">81</p>
            <div className="round" value="81" max="150" style={{"width": "326px"}}>
              <meter className="race race1 moo_moo_meadows" value="8" min="0" max="15" style={{"width": "32px", "left": "0px"}}>
              <strong className="place">
              4<span>th</span>
              </strong>
              <span className="points">8 points</span>
              </meter>
              <meter className="race race2 mushroom_gorge" value="12" min="0" max="15" style={{"width": "48px", "left": "32px"}}>
              <strong className="place">
              2<span>nd</span>
              </strong>
              <span className="points">12 points</span>
              </meter>
              <meter className="race race3 coconut_mall" value="5" min="0" max="15" style={{"width": "20px", "left": "80px"}}>
              <strong className="place">
              7<span>th</span>
              </strong>
              <span className="points">5 points</span>
              </meter>
              <meter className="race race4 n64_dks_jungle_parkway" value="4" min="0" max="15" style={{"width": "16px", "left": "100px"}}>
              <strong className="place">
              8<span>th</span>
              </strong>
              <span className="points">4 points</span>
              </meter>
              <meter className="race race5 maple_treeway" value="2" min="0" max="15" style={{"width": "8px", "left": "116px"}}>
              <strong className="place">
              10<span>th</span>
              </strong>
              <span className="points">2 points</span>
              </meter>
              <meter className="race race6 moonview_highway" value="7" min="0" max="15" style={{"width": "28px", "left": "124px"}}>
              <strong className="place">
              5<span>th</span>
              </strong>
              <span className="points">7 points</span>
              </meter>
              <meter className="race race7 gba_shy_guy_beach" value="15" min="0" max="15" style={{"width": "60px", "left": "152px"}}>
              <strong className="place">
              1<span>st</span>
              </strong>
              <span className="points">15 points</span>
              </meter>
              <meter className="race race8 mario_circuit" value="10" min="0" max="15" style={{"width": "40px", "left": "212px"}}>
              <strong className="place">
              3<span>rd</span>
              </strong>
              <span className="points">10 points</span>
              </meter>
              <meter className="race race9 warios_gold_mine" value="10" min="0" max="15" style={{"width": "40px", "left": "252px"}}>
              <strong className="place">
              3<span>rd</span>
              </strong>
              <span className="points">10 points</span>
              </meter>
              <meter className="race race10 snes_ghost_valley_2" value="8" min="0" max="15" style={{"width": "32px", "left": "292px"}}>
              <strong className="place">
              4<span>th</span>
              </strong>
              <span className="points">8 points</span>
              </meter>
            </div>

            <dl className="identity">
              <dt className="name">Dave</dt>
              <dd className="avatar character mario">
                <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
              </dd>
            </dl>
          </div>
          <div id="player_4" className="player waluigi" style={{"top": "210px"}}>
            <p className="total">74</p>
            <div className="round" value="74" max="150" style={{"width": "298px"}}>
              <meter className="race race1 moo_moo_meadows" value="12" min="0" max="15" style={{"width": "48px", "left": "0px"}}>
              <strong className="place">
              2<span>nd</span>
              </strong>
              <span className="points">12 points</span>
              </meter>
              <meter className="race race2 mushroom_gorge" value="6" min="0" max="15" style={{"width": "24px", "left": "48px"}}>
              <strong className="place">
              6<span>th</span>
              </strong>
              <span className="points">6 points</span>
              </meter>
              <meter className="race race3 coconut_mall" value="12" min="0" max="15" style={{"width": "48px", "left": "72px"}}>
              <strong className="place">
              2<span>nd</span>
              </strong>
              <span className="points">12 points</span>
              </meter>
              <meter className="race race4 n64_dks_jungle_parkway" value="1" min="0" max="15" style={{"width": "4px", "left": "120px"}}>
              <strong className="place">
              11<span>th</span>
              </strong>
              <span className="points">1 points</span>
              </meter>
              <meter className="race race5 maple_treeway" value="6" min="0" max="15" style={{"width": "24px", "left": "124px"}}>
              <strong className="place">
              6<span>th</span>
              </strong>
              <span className="points">6 points</span>
              </meter>
              <meter className="race race6 moonview_highway" value="8" min="0" max="15" style={{"width": "32px", "left": "148px"}}>
              <strong className="place">
              4<span>th</span>
              </strong>
              <span className="points">8 points</span>
              </meter>
              <meter className="race race7 gba_shy_guy_beach" value="1" min="0" max="15" style={{"width": "4px", "left": "180px"}}>
              <strong className="place">
              11<span>th</span>
              </strong>
              <span className="points">1 points</span>
              </meter>
              <meter className="race race8 mario_circuit" value="12" min="0" max="15" style={{"width": "48px", "left": "184px"}}>
              <strong className="place">
              2<span>nd</span>
              </strong>
              <span className="points">12 points</span>
              </meter>
              <meter className="race race9 warios_gold_mine" value="4" min="0" max="15" style={{"width": "16px", "left": "232px"}}>
              <strong className="place">
              8<span>th</span>
              </strong>
              <span className="points">4 points</span>
              </meter>
              <meter className="race race10 snes_ghost_valley_2" value="12" min="0" max="15" style={{"width": "48px", "left": "248px"}}>
              <strong className="place">
              2<span>nd</span>
              </strong>
              <span className="points">12 points</span>
              </meter>
            </div>

            <dl className="identity">
              <dt className="name">Brandon</dt>
              <dd className="avatar character waluigi">
                <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
              </dd>
            </dl>
          </div>
        </section>
        <section id="round_races">
          <div className="slider" style={{"width": "2640px"}}>
            <canvas id="round_races_curves" width="2569" height="312"></canvas>
            <article className="race race1 moo_moo_meadows ">
              <h3>Race 1 <strong>Moo Moo Meadows</strong></h3>
              <ol>
                <li>
                  <h4>1</h4>
                </li>
                <li className="player">
                  <h4>2</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+12</dd>
                    <dd className="score">12</dd>
                  </dl>
                </li>
                <li>
                  <h4>3</h4>
                </li>
                <li className="player">
                  <h4>4</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+8</dd>
                    <dd className="score">8</dd>
                  </dl>
                </li>
                <li className="player">
                  <h4>5</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+7</dd>
                    <dd className="score">7</dd>
                  </dl>
                </li>
                <li>
                  <h4>6</h4>
                </li>
                <li className="player">
                  <h4>7</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+5</dd>
                    <dd className="score">5</dd>
                  </dl>
                </li>
                <li>
                  <h4>8</h4>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race2 mushroom_gorge ">
              <h3>Race 2 <strong>Mushroom Gorge</strong></h3>
              <ol>
                <li>
                  <h4>1</h4>
                </li>
                <li className="player">
                  <h4>2</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+12</dd>
                    <dd className="score">20</dd>
                  </dl>
                </li>
                <li>
                  <h4>3</h4>
                </li>
                <li className="player">
                  <h4>4</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+8</dd>
                    <dd className="score">13</dd>
                  </dl>
                </li>
                <li>
                  <h4>5</h4>
                </li>
                <li className="player">
                  <h4>6</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+6</dd>
                    <dd className="score">18</dd>
                  </dl>
                </li>
                <li>
                  <h4>7</h4>
                </li>
                <li className="player">
                  <h4>8</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+4</dd>
                    <dd className="score">11</dd>
                  </dl>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race3 coconut_mall ">
              <h3>Race 3 <strong>Coconut Mall</strong></h3>
              <ol>
                <li>
                  <h4>1</h4>
                </li>
                <li className="player">
                  <h4>2</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+12</dd>
                    <dd className="score">30</dd>
                  </dl>
                </li>
                <li>
                  <h4>3</h4>
                </li>
                <li>
                  <h4>4</h4>
                </li>
                <li className="player">
                  <h4>5</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+7</dd>
                    <dd className="score">20</dd>
                  </dl>
                </li>
                <li>
                  <h4>6</h4>
                </li>
                <li className="player">
                  <h4>7</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+5</dd>
                    <dd className="score">25</dd>
                  </dl>
                </li>
                <li>
                  <h4>8</h4>
                </li>
                <li className="player">
                  <h4>9</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+3</dd>
                    <dd className="score">14</dd>
                  </dl>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race4 n64_dks_jungle_parkway ">
              <h3>Race 4 <strong>N64 DKs Jungle Parkway</strong></h3>
              <ol>
                <li className="player">
                  <h4>1</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+15</dd>
                    <dd className="score">29</dd>
                  </dl>
                </li>
                <li>
                  <h4>2</h4>
                </li>
                <li>
                  <h4>3</h4>
                </li>
                <li>
                  <h4>4</h4>
                </li>
                <li className="player">
                  <h4>5</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+7</dd>
                    <dd className="score">27</dd>
                  </dl>
                </li>
                <li>
                  <h4>6</h4>
                </li>
                <li>
                  <h4>7</h4>
                </li>
                <li className="player">
                  <h4>8</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+4</dd>
                    <dd className="score">29</dd>
                  </dl>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li className="player">
                  <h4>11</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+1</dd>
                    <dd className="score">31</dd>
                  </dl>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race5 maple_treeway ">
              <h3>Race 5 <strong>Maple Treeway</strong></h3>
              <ol>
                <li className="player">
                  <h4>1</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+15</dd>
                    <dd className="score">44</dd>
                  </dl>
                </li>
                <li>
                  <h4>2</h4>
                </li>
                <li className="player">
                  <h4>3</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+10</dd>
                    <dd className="score">37</dd>
                  </dl>
                </li>
                <li>
                  <h4>4</h4>
                </li>
                <li>
                  <h4>5</h4>
                </li>
                <li className="player">
                  <h4>6</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+6</dd>
                    <dd className="score">37</dd>
                  </dl>
                </li>
                <li>
                  <h4>7</h4>
                </li>
                <li>
                  <h4>8</h4>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li className="player">
                  <h4>10</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+2</dd>
                    <dd className="score">31</dd>
                  </dl>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race6 moonview_highway ">
              <h3>Race 6 <strong>Moonview Highway</strong></h3>
              <ol>
                <li>
                  <h4>1</h4>
                </li>
                <li className="player">
                  <h4>2</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+12</dd>
                    <dd className="score">56</dd>
                  </dl>
                </li>
                <li>
                  <h4>3</h4>
                </li>
                <li className="player">
                  <h4>4</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+8</dd>
                    <dd className="score">45</dd>
                  </dl>
                </li>
                <li className="player">
                  <h4>5</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+7</dd>
                    <dd className="score">38</dd>
                  </dl>
                </li>
                <li>
                  <h4>6</h4>
                </li>
                <li className="player">
                  <h4>7</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+5</dd>
                    <dd className="score">42</dd>
                  </dl>
                </li>
                <li>
                  <h4>8</h4>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race7 gba_shy_guy_beach ">
              <h3>Race 7 <strong>GBA Shy Guy Beach</strong></h3>
              <ol>
                <li className="player">
                  <h4>1</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+15</dd>
                    <dd className="score">53</dd>
                  </dl>
                </li>
                <li className="player">
                  <h4>2</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+12</dd>
                    <dd className="score">54</dd>
                  </dl>
                </li>
                <li>
                  <h4>3</h4>
                </li>
                <li>
                  <h4>4</h4>
                </li>
                <li>
                  <h4>5</h4>
                </li>
                <li>
                  <h4>6</h4>
                </li>
                <li>
                  <h4>7</h4>
                </li>
                <li className="player">
                  <h4>8</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+4</dd>
                    <dd className="score">60</dd>
                  </dl>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li className="player">
                  <h4>11</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+1</dd>
                    <dd className="score">46</dd>
                  </dl>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race8 mario_circuit ">
              <h3>Race 8 <strong>Mario Circuit</strong></h3>
              <ol>
                <li>
                  <h4>1</h4>
                </li>
                <li className="player">
                  <h4>2</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+12</dd>
                    <dd className="score">58</dd>
                  </dl>
                </li>
                <li className="player">
                  <h4>3</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+10</dd>
                    <dd className="score">63</dd>
                  </dl>
                </li>
                <li className="player">
                  <h4>4</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+8</dd>
                    <dd className="score">62</dd>
                  </dl>
                </li>
                <li>
                  <h4>5</h4>
                </li>
                <li>
                  <h4>6</h4>
                </li>
                <li>
                  <h4>7</h4>
                </li>
                <li>
                  <h4>8</h4>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li className="player">
                  <h4>10</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+2</dd>
                    <dd className="score">62</dd>
                  </dl>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race9 warios_gold_mine ">
              <h3>Race 9 <strong>Warios Gold Mine</strong></h3>
              <ol>
                <li className="player">
                  <h4>1</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+15</dd>
                    <dd className="score">77</dd>
                  </dl>
                </li>
                <li>
                  <h4>2</h4>
                </li>
                <li className="player">
                  <h4>3</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+10</dd>
                    <dd className="score">73</dd>
                  </dl>
                </li>
                <li>
                  <h4>4</h4>
                </li>
                <li className="player">
                  <h4>5</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+7</dd>
                    <dd className="score">69</dd>
                  </dl>
                </li>
                <li>
                  <h4>6</h4>
                </li>
                <li>
                  <h4>7</h4>
                </li>
                <li className="player">
                  <h4>8</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+4</dd>
                    <dd className="score">62</dd>
                  </dl>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
            <article className="race race10 snes_ghost_valley_2 ">
              <h3>Race 10 <strong>SNES Ghost Valley 2</strong></h3>
              <ol>
                <li className="player">
                  <h4>1</h4>
                  <dl className="identity">
                    <dt className="name">Mike</dt>
                    <dd className="avatar character wario">
                      <div><img src="_base/img/character_avatars.png" alt="Wario" /></div>
                    </dd>
                    <dd className="points">+15</dd>
                    <dd className="score">84</dd>
                  </dl>
                </li>
                <li className="player">
                  <h4>2</h4>
                  <dl className="identity">
                    <dt className="name">Brandon</dt>
                    <dd className="avatar character waluigi">
                      <div><img src="_base/img/character_avatars.png" alt="Waluigi" /></div>
                    </dd>
                    <dd className="points">+12</dd>
                    <dd className="score">74</dd>
                  </dl>
                </li>
                <li>
                  <h4>3</h4>
                </li>
                <li className="player">
                  <h4>4</h4>
                  <dl className="identity">
                    <dt className="name">Dave</dt>
                    <dd className="avatar character mario">
                      <div><img src="_base/img/character_avatars.png" alt="Mario" /></div>
                    </dd>
                    <dd className="points">+8</dd>
                    <dd className="score">81</dd>
                  </dl>
                </li>
                <li>
                  <h4>5</h4>
                </li>
                <li className="player">
                  <h4>6</h4>
                  <dl className="identity">
                    <dt className="name">Lauren</dt>
                    <dd className="avatar character baby_daisy">
                      <div><img src="_base/img/character_avatars.png" alt="Baby Daisy" /></div>
                    </dd>
                    <dd className="points">+6</dd>
                    <dd className="score">83</dd>
                  </dl>
                </li>
                <li>
                  <h4>7</h4>
                </li>
                <li>
                  <h4>8</h4>
                </li>
                <li>
                  <h4>9</h4>
                </li>
                <li>
                  <h4>10</h4>
                </li>
                <li>
                  <h4>11</h4>
                </li>
                <li>
                  <h4>12</h4>
                </li>
              </ol>
            </article>
          </div>
        </section>
        <section id="output">
          <table id="data">
            <tbody>
              <tr>
                <th>Player</th>
                <th>Character</th>
                <th>Vehicle</th>
                <th>Race 1</th>
                <th>Race 2</th>
                <th>Race 3</th>
                <th>Race 4</th>
                <th>Race 5</th>
                <th>Race 6</th>
                <th>Race 7</th>
                <th>Race 8</th>
                <th>Race 9</th>
                <th>Race 10</th>
                <th>Total</th>
              </tr>
              <tr id="courses">
                <td>&nbsp;</td>
                <td></td>
                <td></td>
                <td>Moo Moo Meadows</td>
                <td>Mushroom Gorge</td>
                <td>Coconut Mall</td>
                <td>N64 DKs Jungle Parkway</td>
                <td>Maple Treeway</td>
                <td>Moonview Highway</td>
                <td>GBA Shy Guy Beach</td>
                <td>Mario Circuit</td>
                <td>Warios Gold Mine</td>
                <td>SNES Ghost Valley 2</td>
                <td></td>
              </tr>
              <tr>
                <td>Mike</td>
                <td>Wario</td>
                <td>Standard Kart L</td>
                <td>5</td>
                <td>8</td>
                <td>9</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>8</td>
                <td>10</td>
                <td>5</td>
                <td>1</td>
                <td>84</td>
              </tr>
              <tr>
                <td>Lauren</td>
                <td>Baby Daisy</td>
                <td>Standard Kart S</td>
                <td>7</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
                <td>3</td>
                <td>7</td>
                <td>2</td>
                <td>4</td>
                <td>1</td>
                <td>6</td>
                <td>83</td>
              </tr>
              <tr>
                <td>Dave</td>
                <td>Mario</td>
                <td>Standard Kart M</td>
                <td>4</td>
                <td>2</td>
                <td>7</td>
                <td>8</td>
                <td>10</td>
                <td>5</td>
                <td>1</td>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>81</td>
              </tr>
              <tr>
                <td>Brandon</td>
                <td>Waluigi</td>
                <td>Standard Kart L</td>
                <td>2</td>
                <td>6</td>
                <td>2</td>
                <td>11</td>
                <td>6</td>
                <td>4</td>
                <td>11</td>
                <td>2</td>
                <td>8</td>
                <td>2</td>
                <td>74</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
});
