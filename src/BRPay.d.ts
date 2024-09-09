declare var BRPay: {
    open: (arg0: {
        site_cd: string; site_name: string; pay_method: string; ordr_idxx: string; good_name: string; good_mny: string; buyr_name: string; successUrl: string; failUrl: string; res_cd: string; res_msg: string; enc_info: string; enc_data: string; ret_pay_method: string; tran_cd: string; use_pay_method: string; ordr_chk: string; cash_yn: string; cash_tr_code: string; cash_id_info: string;
    }) => void;
    register: (arg0: {
        site_cd: string;
        ordr_idxx: string;
        good_mny: string;
        good_name: string;
        Ret_URL: string;
        successUrl: string;
        escw_used: string;
        user_agent: string;
        actionResult : string;
    }) => void;
};
