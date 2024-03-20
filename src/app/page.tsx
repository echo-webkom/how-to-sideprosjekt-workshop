export default function Home() {
  return (
      <div>
        <Menu />
          <div className="text-center">
              <br/>
              <br/>
                <Liste />
                <br/>
                <p>Made by Trym, aka bomulls øye joe</p>
          </div>
      </div>
  );

    function Menu() {
        return (
            <div>
                <h1 className="text-4xl">Velkommen, hva vil du se?</h1>
            </div>
        );
    }

    function Liste() {
        return (
            <ul>
                <li>Kul</li>
                <li>Snill</li>
            </ul>
        )
    }

}
