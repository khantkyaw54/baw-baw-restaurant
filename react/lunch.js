const lunchData = [
    { num: 1, title: "モヒンガー", image: "./images/ramen02.png" },
    { num: 2, title: "シャンカウスエ", image: "./images/shan-noodle.png" },
    { num: 3, title: "ビリヤニ", image: "./images/dan-pauk.png" },
    { num: 4, title: "チェーオーシーチェッ", image: "./images/ramen03.png" },
    { num: 5, title: "ココナッツミルクラーメン", image: "./images/coconnut-ramen.png" },
];

const Lunch = () => {
    return (
        <div className="lunch__items">
            {popularData.map((item) => (
                <div className="lunch__post post" key={item.num}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="post__image"
                    />

                    <div className="post__content">
                        <h3>{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

ReactDOM.createRoot(
    document.querySelector("#lunch-root")
).render(
    <Lunch />
);
