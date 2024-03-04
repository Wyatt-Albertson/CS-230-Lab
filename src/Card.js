export default function Card(){
  return (
<div className="Cards">
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card text-bg-primary mb-3" style = {{height: '12rem'}}>
      <div class="card-body">
        <h5 class="card-title">Card 01</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card text-bg-success mb-3" style = {{height: '12rem'}}>
      <div class="card-body">
        <h5 class="card-title">Card 02</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card text-bg-danger mb-3" style = {{height: '12rem'}}>
      <div class="card-body">
        <h5 class="card-title">Card 03</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
</div>
  )
}