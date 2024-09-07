import React from "react";

const ContentItem = (props) => {
    return(
        <div>
            {props.setOfLabels.map( (item, index) =>
                <div key={item.id} className="card m-3" >
                    <img src={`http://via.placeholder.com/${50 + index}x${50 + index}`} className="card-img-top" alt="picture" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title.slice(0, 40)}</h5>
                        <p className="card-text">{item.body.slice(0, 140)}</p>
                        <a href="#" className="btn btn-primary">Пустая кнопка</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContentItem;