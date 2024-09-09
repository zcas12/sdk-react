import {ChangeEvent, useState} from 'react';
import '@/BRPay.d.ts';
export function OrderPage() {
    const [selectedOption, setSelectedOption] = useState('100000000000');
    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    /*결제창 호출*/
    const requestPayment = () =>{
        BRPay.open({
            site_cd: "T0000",
            site_name: "TEST SITE",
            pay_method: selectedOption,
            ordr_idxx: "TEST1234567890",
            good_name: "옷",
            good_mny: "1004",
            buyr_name: "이재혁",
            successUrl: "http://localhost:3000/success",
            failUrl: "http://localhost:3000/fail",
            res_cd: "",
            res_msg: "",
            enc_info: "",
            enc_data: "",
            ret_pay_method: "",
            tran_cd: "",
            use_pay_method: "",
            ordr_chk: "",
            cash_yn: "",
            cash_tr_code: "",
            cash_id_info: ""
        });
    }
    return (
        <div className="wrapper">
            <h2 className="title">결제수단</h2>
            <div className="pay-method-list">
                <label className="pay-method-item">
                    <input
                        type="radio"
                        value="100000000000"
                        checked={selectedOption === '100000000000'}
                        onChange={handleOptionChange}
                    />
                    신용카드
                </label>
                <label className="pay-method-item">
                    <input
                        type="radio"
                        value="010000000000"
                        checked={selectedOption === '010000000000'}
                        onChange={handleOptionChange}
                    />
                    계좌이체
                </label>
                <label className="pay-method-item">
                    <input
                        type="radio"
                        value="001000000000"
                        checked={selectedOption === '001000000000'}
                        onChange={handleOptionChange}
                    />
                    가상계좌
                </label>
                <label className="pay-method-item">
                    <input
                        type="radio"
                        value="000100000000"
                        checked={selectedOption === '000100000000'}
                        onChange={handleOptionChange}
                    />
                    포인트
                </label>
                <label className="pay-method-item">
                    <input
                        type="radio"
                        value="000010000000"
                        checked={selectedOption === '000010000000'}
                        onChange={handleOptionChange}
                    />
                    휴대폰
                </label>
                <label className="pay-method-item">
                    <input
                        type="radio"
                        value="111000000000"
                        checked={selectedOption === '111000000000'}
                        onChange={handleOptionChange}
                    />
                    신용카드/계좌이체/가상계좌
                </label>
            </div>
            <button
                id="payment-button"
                onClick={requestPayment}
            >
                결제하기
            </button>
        </div>
    );
}

