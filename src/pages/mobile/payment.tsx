import { useLocation, useNavigate } from 'react-router-dom';
export function MobilePaymentPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const resCd = queryParams.get('res_cd');
    const resMsg = queryParams.get('res_msg');
    const traceNo = queryParams.get('trace_no');
    const goHome = () =>{
        navigate('/mobile/trans-reg');
    }
    return (

        <div className="wrapper">
            <div className="result-wrapper">
                <h1>결제 완료</h1>
                <p>res_cd = {resCd}</p>
                <p>res_cd = {resMsg}</p>
                <p>res_cd = {traceNo}</p>
                <button
                    id="home-btn"
                    onClick={goHome}
                >
                    홈으로
                </button>
        </div>
        </div>
    );
}

