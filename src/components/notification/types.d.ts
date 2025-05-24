type Noti = {
  id?: string
  msg: string
};

type NotiListener = {
  callback: (list: Noti[]) => void
  id?: string
};

export { Noti, NotiListener };
