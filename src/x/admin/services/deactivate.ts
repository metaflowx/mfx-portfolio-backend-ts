import AdminRepository from "../repositories";
import { validate as isUuid } from "uuid";



// Deactivate profile details for a given email
export const deactivateAdminService = async (email: string,status:string) => {
    

    // Fetch profile from repository
    const profile = await AdminRepository.readOne(email);
    if (!profile) {
        throw new Error("No admin found.");
    }

    // Add updated timestamp
    profile.updatedAt = new Date();
    
    
    // Update profile in the database
    const deactivateProfile = await AdminRepository.deactivate(email,status);
    
    if (!deactivateProfile) {
        throw new Error("Admin deactivation failed.");
    }


    // Return the asset details
    return {
        email: deactivateProfile.email,
        isActive: deactivateProfile.status,  
    };
};