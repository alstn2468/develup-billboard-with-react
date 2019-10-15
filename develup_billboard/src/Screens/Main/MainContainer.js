import React from "react";
import MainPresenter from "./MainPresenter";
import { getChart } from "billboard-top-100";

export default class extends React.Component {
    state = {
        loading: false
    };

    componentDidMount() {
        try {
            this.setState({ loading: true });
            getChart((err, chart) => {
                if (err) console.log(err);
                else console.log(chart);
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading } = this.state;

        return <MainPresenter loading={loading} />;
    }
}
