import { useLocation, useNavigate } from 'react-router-dom';
import React, {FormEvent }from 'react';
export function MobileOrderPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const reqDataParam = queryParams.get('reqData');
    const resDataParam = queryParams.get('resData');

    let reqData;
    let resData;
    if (reqDataParam && resDataParam) {
        reqData = JSON.parse(reqDataParam);
        resData = JSON.parse(resDataParam);
    }else{
        navigate('/mobile/trans-reg');
        alert("사용자 취소");
    }
    const handleSubmit = (event: FormEvent) => {

    };

    return (
        <div className="wrapper">
            <form name="orderInfo" action={resData.PayUrl} onSubmit={handleSubmit}>
                <input type="text" name="ordr_idxx" defaultValue={reqData.ordr_idxx} />
                <input type="text" name="good_name" defaultValue={reqData.good_name} />
                <input type="text" name="good_mny"  defaultValue={reqData.good_mny} />
                <input type="text" name="buyr_name" defaultValue="이재혁"/>
                {/* 공통정보 */}
                <input type="hidden" name="req_tx"     defaultValue="pay" />     {/*요청 구분*/}
                <input type="hidden" name="shop_name"  defaultValue="TEST SITE" /> {/*사이트 이름*/}
                <input type="hidden" name="site_cd"    defaultValue={reqData.site_cd} />  {/*사이트 코드*/}
                <input type="hidden" name="currency"   defaultValue="410"/>  {/*통화 코드*/}
                {/*인증시 필요한 파라미터(변경불가)*/}
                <input type="hidden" name="escw_used"     defaultValue="N"/>
                <input type="hidden" name="pay_method"    defaultValue={reqData.pay_method}/>
                <input type="hidden" name="ActionResult"  defaultValue={reqData.actionResult}/>
                <input type="hidden" name="van_code"      defaultValue={reqData.van_code} />
                {/*신용카드 설정*/}
                <input type="hidden" name="quotaopt"   defaultValue="12"/> {/*최대 할부개월수*/}
                {/*가상계좌 설정*/}
                <input type="hidden" name="ipgm_date"  defaultValue=""/>
                {/*리턴 URL (kcp와 통신후 결제를 요청할 수 있는 암호화 데이터를 전송 받을 가맹점의 주문페이지 URL)*/}
                <input type="hidden" name="Ret_URL" defaultValue="http://localhost:8080/mobile/order" />
                {/*화면 크기조정*/}
                <input type="hidden" name="tablet_size" defaultValue="1.0"/>
                {/*추가 파라미터 ( 가맹점에서 별도의 값전달시 param_opt 를 사용하여 값 전달 )*/}
                <input type="hidden" name="param_opt_1" defaultValue=""/>
                <input type="hidden" name="param_opt_2" defaultValue=""/>
                <input type="hidden" name="param_opt_3" defaultValue=""/>
                {/*거래등록 응답값*/}
                <input type="hidden" name="approval_key" id="approval" defaultValue={resData.approvalKey}/>
                <input type="hidden" name="traceNo"                    defaultValue={resData.traceNo}/>
                <input type="hidden" name="PayUrl"                     defaultValue={resData.PayUrl}/>
                {/*인증창 호출 시 한글깨질 경우 encoding 처리 추가 (**인코딩 네임은 대문자)*/}
                {/*<input type="hidden" name="encoding_trans" value="UTF-8"/>*/}
                {/*가맹점 APP 호출 URL ( 앱 연동시 필수)*/}
                <input type="hidden" name="AppUrl" defaultValue=""/>
                <button
                    id="payment-button"
                    type="submit"
                >
                    결제하기
                </button>
            </form>
        </div>
    );
}

