import React from 'react';

function ForbiddenFood() {

  return (
    <section className="forbidden-food">
      {/* <p>Hello ForbiddenFood</p> */}
      <img src="assets/img/forbidden food/food for dogs.png" alt="food for dogs"></img>
    </section>
  );
}

export default React.memo(ForbiddenFood)
