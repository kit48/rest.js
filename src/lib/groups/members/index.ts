import request from '../../../utils/request';

const API = 'http://h5.snh48.com/resource/jsonp/members.php';

export enum Groups {
  ALL = '00',
  SNH48 = '10',
  BEJ48 = '20',
  GNZ48 = '30',
  SHY48 = '40',
  CKG48 = '50',
}

export interface Response<T> {
  total: string;
  rows: T;
}

export interface Member {
  abbr: string;
  birth_day: string;
  birth_place: string;
  blood_type: string;
  catch_phrase: string;
  company: string;
  experience: string;
  fname: string;
  gcolor: string;
  gid: string;
  gname: string;
  height: string;
  hobby: string;
  join_day: string;
  nickname: string;
  pid: string;
  pinyin: string;
  pname: string;
  pocket_id: string;
  ranking: string;
  sid: string;
  sname: string;
  speciality: string;
  star_sign_12: string;
  star_sign_48: string;
  status: string;
  tcolor: string;
  tid: string;
  tieba_kw: string;
  tname: string;
  weibo_uid: string;
  weibo_verifier: string;
}

const members = (group: Groups) => {
  return request.get<Response<Member[]>>(API, {
    params: {
      gid: group,
    },
  });
};

members.Groups = Groups;

export default members;
