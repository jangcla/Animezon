import { connect } from "react-redux";
import InfoPage from "./info_page";

const mSTP = (state, ownProps) => {
    const infoWord = ownProps.match.params.infoword;

    console.log(infoWord)

    return {
        infoWord: infoWord
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(InfoPage);