import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {rideStatus} from "../types/types";

@Entity()
class Ride extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({type: "text"})
    pickUpAddress: string;

    @Column({
        type: "text",
        enum: ["ACCEPTED" , "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"]
    })
    status: rideStatus;

    @Column({type: "double precision", default: 0 })
    pickUpLat: number;

    @Column({type: "double precision", default: 0 })
    pickUpLng: number;

    @Column({type: "text"})
    dropOffAddress: string;

    @Column({type: "double precision", default: 0})
    dropOffLat: number;

    @Column({type: "double precision", default: 0})
    dropOffLng: number;

    @Column({type: "double precision", default: 0})
    price: number;

    @Column({type: "text"})
    distance: string;

    @Column({type: "text"})
    duration: string;
}

export default Ride;
