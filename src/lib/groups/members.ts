import request from '../../utils/request';
import { Groups } from '../../enums';

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

export default (group: Groups) => {
  return request.get<Response<Member[]>>('http://h5.snh48.com/resource/jsonp/members.php', {
    params: {
      gid: group,
    },
  });
};
