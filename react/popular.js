const popularData = [
    { num: 1, title: "モヒンガー", price: "¥980", image: "./images/ramen02.png" },
    { num: 2, title: "シャンカウスエ", price: "¥980", image: "./images/shan-noodle.png" },
    { num: 3, title: "ビリヤニ", price: "¥1100", image: "./images/dan-pauk.png" },
    { num: 4, title: "チェーオーシーチェッ", price: "¥1100", image: "./images/ramen03.png" },
    { num: 5, title: "ココナッツミルクラーメン", price: "¥1100", image: "./images/coconnut-ramen.png" },
    { num: 6, title: "スパイシー豚リブスープ", price: "¥1200", image: "./images/soup03.png" },
];

const Popular = () => {
    return (
        <div className="popular__items">
            {popularData.map((item) => (
                <div className="popular__post post" key={item.num}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="post__image"
                    />

                    <div className="post__content">
                        <h3>{item.title}</h3>
                        <p className="post__price">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

ReactDOM.createRoot(document.querySelector("#popular-root")).render(
    <Popular />
);
