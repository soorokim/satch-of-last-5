import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { Goal, Satch } from '../atoms/goalList';

export function handlers(baseUrl = '') {
  return [
    rest.post(`${baseUrl}/auth/login`, postLogin),
    rest.get(`${baseUrl}/auth/refresh`, getRefresh),
    rest.post(`${baseUrl}/goals`, postGoal),
    rest.get(`${baseUrl}/goals`, getGoal),
    rest.get(`${baseUrl}/satchs/:goalId`, getSatchList),
    rest.post(`${baseUrl}/satchs/:goalId`, postSatch),
    rest.patch(`${baseUrl}/satchs/:goalId/:satchId`, patchSatch),
    rest.delete(`${baseUrl}/satchs/:goaId/:satchId`, deleteSatch),
  ];
}
const postLogin: Parameters<typeof rest.post>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      accessToken: uuidv4(),
    }),
  );
};

const getRefresh: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      accessToken: uuidv4(),
    }),
  );
};

const goal = {} as Goal;

const postGoal: Parameters<typeof rest.post>[1] = (req, res, ctx) => {
  goal.id = uuidv4();
  req.json().then((value) => {
    goal.name = value.name;
    goal.price = value.price;
  });
  goal.createdAt = dayjs().toDate();
  goal.satchList = [];
  goal.percent = 0;
  goal.emoticon = '';

  return res(ctx.status(201));
};

const getGoal: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(goal));
};

const getSatchList: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.json(goal.satchList));
};

const postSatch: Parameters<typeof rest.post>[1] = (req, res, ctx) => {
  const satch = {} as Satch;

  satch.id = uuidv4();

  req.json().then((value) => {
    satch.name = value.name;
    satch.price = value.price;
    satch.date = dayjs(value.date).toDate();
  });

  goal.satchList.push(satch);

  return res(ctx.status(201), ctx.text(satch.id));
};

const patchSatch: Parameters<typeof rest.patch>[1] = (req, res, ctx) => {
  req.json().then((value) => {
    const index = goal.satchList.findIndex((s) => s.id === value.id);
    const modifySatch = { ...goal.satchList[index], ...value };

    goal.satchList = goal.satchList.splice(index, 1, modifySatch);
  });

  return res(ctx.status(200));
};

const deleteSatch: Parameters<typeof rest.delete>[1] = (req, res, ctx) => {
  const { satchId } = req.params;

  const index = goal.satchList.findIndex((s) => s.id === satchId);

  goal.satchList.splice(index, 1);

  return res(ctx.status(200));
};
