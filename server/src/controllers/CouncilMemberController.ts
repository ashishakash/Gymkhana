/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import reader from 'xlsx';
export class CouncilMemberController {
  static async getCouncilMembersAllCurrent(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const file = reader.readFile('./src/Assets/council.xlsx');
      const t = reader.utils.sheet_to_json(file.Sheets[0]);
      res.status(200).json({
        data: t,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async getCouncilMembersCurrentQueried(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const query = req.params.query;
      const file = reader.readFile('./src/Assets/council.xlsx');
      const t = reader.utils.sheet_to_json(file.Sheets[0]);
      const data: any = [];
      t.forEach((row: any) => {
        if (row.Post === query || row.Council === query) data.push(row);
      });
      res.status(200).json({
        data,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async getCouncilMemberPrevQueried(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const file = reader.readFile('./src/Assets/council.xlsx');
      const t = reader.utils.sheet_to_json(file.Sheets[1]);
      const query = req.params.query;
      const year = req.params.year;
      const data: any = [];
      t.forEach((row: any) => {
        if (year != 'all') {
          if (
            (row.Post === query || row.Council === query || query === 'all') &&
            row.Year === parseInt(year)
          )
            data.push(row);
        } else {
          if (row.Post === query || row.Council === query || query === 'all')
            data.push(row);
        }
      });
      res.status(200).json({
        data: t,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
}
