import request from '../../../utils/request';

const API = 'https://api.snh48.com/getticketinfo.php';

export enum Groups {
  SNH48 = '1',
  BEJ48 = '2',
  GNZ48 = '3',
  SHY48 = '4',
  CKG48 = '5',
}

export enum TEAMS {
  ALL = 'UNION',
  SII = 'SII',
  NII = 'NII',
  HII = 'HII',
  X = 'X',
}

export interface Response<T> {
  status: string;
  desc: T;
}

export interface TickedInfo {
  bz: string;
  date: string;
  expire_time: number;
  gid: number;
  group: string;
  is_live: number;
  is_real: string;
  s_tag: string;
  team: string;
  title: string;
}

export interface QueryParams {
  group: Groups;
  /** like 2020-08 */
  date: string;
  team: TEAMS;
}

const tickets = async (params: QueryParams) => {
  const { group, ...rest } = params;
  const response = await request.get<string>(API, {
    params: {
      ...rest,
      gid: group,
      act: 'choose',
    },
    headers: {
      Referer: 'https://www.snh48.com/ticket.html',
    },
  });

  return {
    ...response,
    data: eval(response.data),
  };
};

tickets.Groups = Groups;
tickets.TEAMS = TEAMS;

export default tickets;
