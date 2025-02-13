import { Board, BoardId } from "types/board";
import { User, UserId } from "types/user";

export type InitialState = {
  boards: Record<BoardId, Board>;
  boardsIds: BoardId[];
  users: Record<UserId, User>;
  usersIds: UserId[];
};

const users: Record<UserId, User> = {
  u1: {
    id: "u1",
    name: "Ali Hassan",
    location: "Cairo",
    rate: 4.5,
    status: 1,
    is_new: false,
    is_followed: true,
    phone: "854 813 0499",
  },
  u2: {
    id: "u2",
    name: "Fatima Ahmed",
    location: "Riyadh",
    rate: 3.8,
    status: 2,
    is_new: true,
    is_followed: false,
    phone: "068 072 5998",
  },
  u3: {
    id: "u3",
    name: "Mohammed Khalid",
    location: "Dubai",
    rate: 4.2,
    status: 0,
    is_new: true,
    is_followed: false,
    phone: "767 203 1817",
  },
  u4: {
    id: "u4",
    name: "Layla Mahmoud",
    location: "Beirut",
    rate: 4.2,
    status: 1,
    is_new: false,
    is_followed: false,
    phone: "147 681 1295",
  },
  u5: {
    id: "u5",
    name: "Ahmed Youssef",
    location: "Algiers",
    rate: 4.7,
    status: 2,
    is_new: true,
    is_followed: false,
    phone: "965 836 6837",
  },
  u6: {
    id: "u6",
    name: "Sarah Ahmed",
    location: "Cairo",
    rate: 3.5,
    status: 0,
    is_new: false,
    is_followed: false,
    phone: "575 766 5382",
  },
  u7: {
    id: "u7",
    name: "Youssef Omar",
    location: "Dammam",
    rate: 4.9,
    status: 1,
    is_new: true,
    is_followed: false,
    phone: "890 067 6027",
  },
  u8: {
    id: "u8",
    name: "Reem Nour",
    location: "Khartoum",
    rate: 4.1,
    status: 2,
    is_new: false,
    is_followed: false,
    phone: "772 838 1761",
  },
  u9: {
    id: "u9",
    name: "Abdullah Nada",
    location: "Manama",
    rate: 3.2,
    status: 0,
    is_new: true,
    is_followed: false,
    phone: "573 212 5988",
  },
  u10: {
    id: "u10",
    name: "Noor Ibrahim",
    location: "Tripoli",
    rate: 4.3,
    status: 1,
    is_new: false,
    is_followed: false,
    phone: "454 353 1728",
  },
  u11: {
    id: "u11",
    name: "Zainab Ali",
    location: "Sana'a",
    rate: 4.6,
    status: 2,
    is_new: true,
    is_followed: false,
    phone: "633 731 4069",
  },
  u12: {
    id: "u12",
    name: "Mahmoud Samir",
    location: "Cairo",
    rate: 3.9,
    status: 0,
    is_new: false,
    is_followed: false,
    phone: "298 466 8059",
  },
  u13: {
    id: "u13",
    name: "Lina Abdulrahman",
    location: "Baghdad",
    rate: 4.4,
    status: 1,
    is_new: true,
    is_followed: false,
    phone: "731 833 5116",
  },
  u14: {
    id: "u14",
    name: "Khaled Omar",
    location: "Doha",
    rate: 4.8,
    status: 2,
    is_new: false,
    is_followed: false,
    phone: "697 646 2296",
  },
  u15: {
    id: "u15",
    name: "Samia Ibrahim",
    location: "Muscat",
    rate: 3.7,
    status: 0,
    is_new: true,
    is_followed: false,
    phone: "579 884 5678",
  },
  u16: {
    id: "u16",
    name: "Mohammed Ahmed",
    location: "Khartoum",
    rate: 4.2,
    status: 1,
    is_new: false,
    is_followed: false,
    phone: "939 357 5228",
  },
  u17: {
    id: "u17",
    name: "Fatima Youssef",
    location: "Jeddah",
    rate: 4.3,
    status: 2,
    is_new: true,
    is_followed: false,
    phone: "849 474 6944",
  },
  u18: {
    id: "u18",
    name: "Ali Hassan",
    location: "Bahrain",
    rate: 3.5,
    status: 0,
    is_new: false,
    is_followed: false,
    phone: "930 460 9185",
  },
  u19: {
    id: "u19",
    name: "Maryam Abdulrahman",
    location: "Dammam",
    rate: 4.1,
    status: 1,
    is_new: false,
    is_followed: true,
    phone: "727 969 1938",
  },
  u20: {
    id: "u20",
    name: "Abdullah Nour",
    location: "Manama",
    rate: 3.3,
    status: 2,
    is_new: false,
    is_followed: false,
    phone: "489 670 0415",
  },
  u21: {
    id: "u21",
    name: "Layla Ahmed",
    location: "Doha",
    rate: 4.5,
    status: 0,
    is_new: false,
    is_followed: true,
    phone: "962 572 7300",
  },
  u22: {
    id: "u22",
    name: "Ahmed Yassin",
    location: "Medina",
    rate: 3.8,
    status: 1,
    is_new: false,
    is_followed: false,
    phone: "241 275 6021",
  },
  u23: {
    id: "u23",
    name: "Huda Nasser",
    location: "Beirut",
    rate: 4.6,
    status: 2,
    is_new: false,
    is_followed: true,
    phone: "260 265 5297",
  },
  u24: {
    id: "u24",
    name: "Amira Yasser",
    location: "Riyadh",
    rate: 3.9,
    status: 0,
    is_new: false,
    is_followed: false,
    phone: "414 675 8022",
  },
  u25: {
    id: "u25",
    name: "Nora Ahmed",
    location: "Cairo",
    rate: 4.3,
    status: 1,
    is_new: false,
    is_followed: true,
    phone: "221 863 4099",
  },
  u26: {
    id: "u26",
    name: "Mohammed Samir",
    location: "Medina",
    rate: 4.7,
    status: 2,
    is_new: false,
    is_followed: false,
    phone: "738 459 7359",
  },
  u27: {
    id: "u27",
    name: "Marwa Ali",
    location: "Khartoum",
    rate: 3.5,
    status: 0,
    is_new: false,
    is_followed: true,
    phone: "522 558 5536",
  },
  u28: {
    id: "u28",
    name: "Abdulrahman Salim",
    location: "Muscat",
    rate: 4.2,
    status: 1,
    is_new: false,
    is_followed: false,
    phone: "555 643 8179",
  },
  u29: {
    id: "u29",
    name: "Soha Mahmoud",
    location: "Cairo",
    rate: 4.8,
    status: 2,
    is_new: false,
    is_followed: true,
    phone: "781 023 3325",
  },
  u30: {
    id: "u30",
    name: "Youssef Omar",
    location: "Jeddah",
    rate: 3.7,
    status: 0,
    is_new: false,
    is_followed: false,
    phone: "824 526 8909",
  },
};

const usersIds: UserId[] = [
  "u1",
  "u2",
  "u3",
  "u4",
  "u5",
  "u6",
  "u7",
  "u8",
  "u9",
  "u10",
  "u11",
  "u12",
  "u13",
  "u14",
  "u15",
  "u16",
  "u17",
  "u18",
  "u19",
  "u20",
  "u21",
  "u22",
  "u23",
  "u24",
  "u25",
  "u26",
  "u27",
  "u28",
  "u29",
  "u30",
];

const initialState: InitialState = {
  boards: {
    applied: {
      id: "applied",
      name: "Applied",
      total: 7,
      rejected: 3,
      userIds: ["u1", "u2", "u3", "u4", "u5", "u6", "u7"],
      is_add_applicants: true,
    },
    shortlisted: {
      id: "shortlisted",
      name: "Shortlisted",
      total: 12,
      rejected: 4,
      userIds: [
        "u8",
        "u9",
        "u10",
        "u11",
        "u12",
        "u13",
        "u14",
        "u15",
        "u16",
        "u17",
        "u18",
        "u19",
      ],
    },
    interview: {
      id: "interview",
      name: "Interview",
      total: 11,
      rejected: 7,
      userIds: [
        "u20",
        "u21",
        "u22",
        "u23",
        "u24",
        "u25",
        "u26",
        "u27",
        "u28",
        "u29",
        "u30",
      ],
    },
  },
  boardsIds: ["applied", "shortlisted", "interview"],
  users,
  usersIds,
};

export default initialState;
