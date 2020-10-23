import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';


export default interface IAppointmentRepository {
 create(date:ICreateAppointmentDTO): Promise<Appointment>;   
 findByDate(date: Date): Promise<Appointment | undefined> 

}