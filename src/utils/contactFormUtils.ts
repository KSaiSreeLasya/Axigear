import Swal from 'sweetalert2';
import { ContactSubmission, submitContactForm } from './supabase';

/**
 * Show success alert for contact form submission
 */
export const showSuccessAlert = async () => {
  return await Swal.fire({
    title: 'Success!',
    text: 'Thank you for reaching out! We will get back to you within 24 hours.',
    icon: 'success',
    confirmButtonText: 'Great!',
    confirmButtonColor: '#0f766e',
    allowOutsideClick: false,
    allowEscapeKey: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (modal) => {
      // Optional: Add custom styling
      const confirmButton = modal.querySelector('.swal2-confirm') as HTMLElement;
      if (confirmButton) {
        confirmButton.style.fontWeight = 'bold';
        confirmButton.style.textTransform = 'uppercase';
        confirmButton.style.letterSpacing = '0.1em';
      }
    },
  });
};

/**
 * Show error alert with custom message
 */
export const showErrorAlert = async (errorMessage?: string) => {
  return await Swal.fire({
    title: 'Error!',
    text: errorMessage || 'Failed to submit the form. Please try again.',
    icon: 'error',
    confirmButtonText: 'Try Again',
    confirmButtonColor: '#dc2626',
    allowOutsideClick: false,
    didOpen: (modal) => {
      const confirmButton = modal.querySelector('.swal2-confirm') as HTMLElement;
      if (confirmButton) {
        confirmButton.style.fontWeight = 'bold';
        confirmButton.style.textTransform = 'uppercase';
        confirmButton.style.letterSpacing = '0.1em';
      }
    },
  });
};

/**
 * Show confirmation dialog before submitting
 */
export const showConfirmationDialog = async () => {
  return await Swal.fire({
    title: 'Confirm Submission',
    text: 'Please review your information before submitting.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, Submit',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#0f766e',
    cancelButtonColor: '#64748b',
  });
};

/**
 * Show loading alert while submitting
 */
export const showLoadingAlert = () => {
  Swal.fire({
    title: 'Submitting...',
    text: 'Please wait while we process your submission.',
    icon: 'info',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

/**
 * Hide loading alert
 */
export const hideLoadingAlert = () => {
  Swal.close();
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate form data before submission
 */
export const validateContactForm = (formData: Partial<ContactSubmission>): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!formData.full_name?.trim()) {
    errors.full_name = 'Full name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Submit contact form with full error handling
 */
export const handleContactFormSubmission = async (formData: ContactSubmission) => {
  try {
    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      return {
        success: false,
        errors: validation.errors,
        message: 'Please fix the errors in the form',
      };
    }

    // Show loading
    showLoadingAlert();

    // Submit to Supabase
    const result = await submitContactForm(formData);

    if (result.success) {
      // Show success alert
      await showSuccessAlert();
      return {
        success: true,
        message: 'Form submitted successfully',
        data: result.data,
      };
    } else {
      // Show error alert
      await showErrorAlert(result.error);
      return {
        success: false,
        message: result.message,
        error: result.error,
      };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    await showErrorAlert(errorMessage);
    return {
      success: false,
      message: 'An unexpected error occurred',
      error: errorMessage,
    };
  }
};

/**
 * Format date for display
 */
export const formatSubmissionDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Get inquiry type color for UI
 */
export const getInquiryTypeColor = (inquiryType: string): string => {
  const colorMap: Record<string, string> = {
    'General Inquiry': 'bg-blue-100 text-blue-800',
    'Test Drive Request': 'bg-green-100 text-green-800',
    'Fleet Solutions': 'bg-purple-100 text-purple-800',
    'Investment Inquiries': 'bg-yellow-100 text-yellow-800',
  };
  return colorMap[inquiryType] || 'bg-gray-100 text-gray-800';
};
