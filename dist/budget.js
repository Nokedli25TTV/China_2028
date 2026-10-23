(() => {
  const model = window.chinaBudget;
  const selector = document.getElementById('budget-party');
  const storageKey = 'china-2028-budget-party';
  const text = value => String(value).replace(/[&<>"']/g,character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const number = value => Math.round(value).toLocaleString('hu-HU');
  const money = value => `${number(Math.round(value / 1000) * 1000)} Ft`;
  const millions = value => `${(value / 1000000).toLocaleString('hu-HU',{minimumFractionDigits:2,maximumFractionDigits:2})} M Ft`;
  try { const saved = localStorage.getItem(storageKey); if (saved === '5' || saved === '6') selector.value = saved; } catch {}

  function render() {
    const budget = window.calculateTripBudget(Number(selector.value));
    document.getElementById('budget-person-total').textContent = millions(budget.perPerson);
    document.getElementById('budget-person-base').textContent = `${money(budget.basePerPerson)} / fő tartalék nélkül`;
    document.getElementById('budget-group-total').textContent = millions(budget.total);
    document.getElementById('budget-group-base').textContent = millions(budget.baseTotal);
    document.getElementById('budget-group-reserve').textContent = millions(budget.reserveTotal);
    document.getElementById('budget-room-layout').textContent = budget.roomLayout;
    document.getElementById('budget-selected-party').textContent = `${budget.partySize} főre összesen`;
    document.getElementById('budget-status').textContent = `${budget.partySize} fő, 3 szoba: ajánlott teljes keret ${money(budget.total)}, fejenként ${money(budget.perPerson)}, 15 százalék tartalékkal.`;
    document.getElementById('budget-rows').innerHTML = budget.lines.map(line => `<tr><td><details class="cost-line-detail"><summary>${text(line.label)}</summary><p>${text(line.detail)}</p></details></td><td data-label="Fejenként">${money(line.perPerson)}</td><td data-label="${budget.partySize} főre">${money(line.group)}</td></tr>`).join('') +
      `<tr class="cost-total"><th scope="row">Alapbecslés</th><td data-label="Fejenként">${money(budget.basePerPerson)}</td><td data-label="${budget.partySize} főre">${money(budget.baseTotal)}</td></tr><tr><th scope="row">2028-as tartalék · 15%</th><td data-label="Fejenként">${money(budget.reserveTotal / budget.partySize)}</td><td data-label="${budget.partySize} főre">${money(budget.reserveTotal)}</td></tr><tr class="cost-total final"><th scope="row">Ajánlott teljes keret</th><td data-label="Fejenként">${money(budget.perPerson)}</td><td data-label="${budget.partySize} főre">${money(budget.total)}</td></tr>`;
    document.getElementById('budget-comparison').innerHTML = [5,6].map(size => {
      const other = window.calculateTripBudget(size);
      return `<article class="party-comparison-card ${size === budget.partySize ? 'selected' : ''}"><p>${size} utazó · 3 szoba</p><strong>${millions(other.perPerson)} / fő</strong><span>${millions(other.total)} a teljes csapatra</span><small>15% tartalékkal · szobák: ${other.roomLayout}</small></article>`;
    }).join('');
    const hotels = model.hotels.map(hotel => {
      const roomHuf = hotel.roomRate * model.fx[hotel.currency];
      const total = roomHuf * hotel.nights * budget.roomCount;
      return `<tr><th scope="row">${text(hotel.city)}</th><td>${hotel.nights}</td><td>${number(hotel.roomRate)} ${hotel.currency}<br><small>≈ ${money(roomHuf)}</small></td><td>${money(total)}</td><td>${money(total / budget.partySize)}</td></tr>`;
    }).join('');
    document.getElementById('hotel-rows').innerHTML = hotels + `<tr class="cost-total"><th scope="row">Összesen</th><td>31 éj</td><td>3 szoba</td><td>${money(budget.hotelTotal)}</td><td>${money(budget.hotelTotal / budget.partySize)}</td></tr>`;
  }

  document.getElementById('flight-cost-rows').innerHTML = model.flights.map(flight => `<tr><th scope="row">${text(flight.route)}<br><small>${text(flight.date)}</small></th><td>${money(flight.amount)} / fő</td></tr>`).join('');
  document.getElementById('rail-cost-rows').innerHTML = model.rail.map(rail => `<tr><th scope="row">${text(rail.route)}</th><td>≈ ${number(rail.cny)} CNY<br><small>${money(rail.cny * model.fx.CNY)} / fő</small></td></tr>`).join('');
  document.getElementById('food-cost-rows').innerHTML = model.food.map(food => `<tr><th scope="row">${text(food.region)}<br><small>${food.days} nap × ${number(food.daily)} ${food.currency} / fő</small></th><td>${money(food.days * food.daily * model.fx[food.currency])} / fő</td></tr>`).join('');
  document.getElementById('attraction-cost-rows').innerHTML = model.attractions.map(place => `<tr><th scope="row">${text(place.city)}<br><small>${text(place.detail)}</small></th><td>${money(place.amount)} / fő</td></tr>`).join('');
  document.getElementById('budget-sources').innerHTML = model.sources.map(source => `<li><a href="${text(source.url)}" target="_blank" rel="noreferrer">${text(source.title)} ↗</a><p>${text(source.note)}</p></li>`).join('');
  selector.addEventListener('change',() => { try { localStorage.setItem(storageKey,selector.value); } catch {} render(); });
  render();
})();
