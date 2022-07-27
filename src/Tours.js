import React from "react";
import Tour from "./Tour";

class Tours extends React.Component {

    render() {
        return (
            <section>
                <div>
                    <h2>Our Tours</h2>
                    <div className="underline"></div>
                </div>

                <div>
                    {
                        this.props.tours.map((tour) => {
                            return <Tour key={tour.id} {...tour} removeTour={this.props.removeTour}></Tour>;
                        })
                    }
                </div>
            </section>
    
        );
    };
}

export default Tours;