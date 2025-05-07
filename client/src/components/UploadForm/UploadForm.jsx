import React, { useState } from 'react';
import { FiUpload, FiX, FiImage, FiFileText, FiFile } from 'react-icons/fi';
import { FaFilePdf } from 'react-icons/fa';



const UploadForm = () => {
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const fallbackImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8ii+YAg+UMhuWeyPLU5/ociebz+f5hp+wvkOfd6fqpyvNLnOqMue+tz/QAheU7lujp8/y41vaqzvT1+f6WwvFSn+ozk+jn8vzB2/dprO2OvvAojufH3/fQ4/jg7vt5tO5oqexXWaacAAAE0UlEQVR4nO2di3LiOBBFbSuIhDURhtgQAgPz/z+5prYysyRybWO3+mq893wAqlPqtl6NVBSEEEIIIYQQQgj5H9NcFgpclmiPKG/nde0rJU7P7QIt9IVluw/O+1IJ712oX9FS/2bnnZbcb8uwP6O9Pmm6Sq337qiuaLV/WJRp/HpCl8NHZ6GXft9xG7ziJV0P3vAnuGKdVLBX3DdYwY+QVrBX3EAVD1VqwVsvIgP1qD8ORhSBuXhInISfirhAfUqehWjFLkEfRn/Sv2ACtdEfC323i8YFaNBY6X9JfV28Rn8VE6hb/TTsDYtdXBExaMQDarJh8RoPVMCg8ZRgVXgzHApU+1xMZjgUqOa5mM4wl1xMaDiUiy+2vZjSMI9BI6lhFoppDftAjU2ZTCdwiQ2HctFw0EhtiA/U5IaDQ79VoKY3RE/gDAzBEzgLQ2wumhj2itFBwyQXbQwHx0WDXjQyBAaqleGgYvJANTMcCtTkg4adIWrQMDQE5aKlIWYCZ2o4OIFL2Yu2hohANTYEKFob2q/6zQ3NV/32htaBCjA0HjQQhrarfoih6QQOY2iZiyBDw1xEGQ4e26grwgyHerF+m43hgKI7zsdwYAJXKReHIw3jueidbpxCDeOB6j5mZBhX1J3bgA2jgRq2czKM9aL/OSvDmKLqzAZvGDm2CZd5GX7PxfA+M8NvgRo0B/0sDL8quqfZGRbbu1TM3vBl/TDt5k8y7GeWj3P3A9kbToaGNKQhHhrSkIZ4aEhDGuKhIQ1piIeGNKQhHhrSkIZ4cIZjNrM/eeQKFZChD6dj+9dY2uMpWj2TkWGopx5bvtfSW0YghkGjyEV6bxrCMLQqrbUyRYChWjmd7Oo0gGHQKv9YijrR3tBd1dq7itozNwx6N8meJZ0IMNSrURKFqbmhP+lVfL6dBOP+n20ouQHPPkorvb9BNJIb8AB5qFfwKboBz97QP6u19yyZfgNG/EqrHPIiuqYRYOg3Ss1tRCsoxMxbaWIqvNEXsnpy3WFyW4dO2hhkBezdx7RkvKzFOxmofRpXld3zWLqyeqAl3E7UFB5oh7uJNKQhHhrSkIZ4aEhDGuKhIQ1piAdl6IM7vYzl5OSFCijDqtutmuVYmtWuEz9pAzH05fSd/a30XSKEoc4dVY1sQxhiqHT/ZiNqDHJuoXX4tM303ELt2EJ4cAE4P9S7xUH0vhTgDFjvrhHR8Zr9OX6pWIuR5Tn+/GsxSq/Yh3nWRFV6r6QvsszD0unUXt5o8+zDslRrTzQ1RVRfanWirIQWUqmgU514zrhSwWtcv/We8eqp9NV16pCxvEbf08nFsG/WH3c/VmP5sTt6eVOofRofQjWWEB6oVeBeGw1piIeGNKQhHhrSkIZ4aEhDGuKhIQ3vEJ3nWRN2ioaifzxao/qEx0pc5GJItVI0bCTnecYov7zaZWjYaQoWT/klYtD8lBbF4aF/lVng/fQ/c94h/OeqHeovrx1y+5pWyl0ov9vICJX7mr5Q55SJY95w+U8O0rpPA3ypHqM3Ftl8T73XK2y5V8ykF32ZSLCfvMmLsBP6VV3CV+SL1xI9LjqvuWiKsGz3wYES0ntX7dtkD8j/4u28rv3ok/oplPX6rP1K7iDNZWHNJWX2EUIIIYQQQgghJHv+Bt2GkZOX1t1LAAAAAElFTkSuQmCC';


    const getFileIcon = (type) => {
        if (type.includes('image')) return <FiImage className="text-blue-500" />;
        if (type.includes('pdf')) return <FaFilePdf className="text-red-500" />;
        if (type.includes('word') || type.includes('text')) return <FiFileText className="text-green-500" />;
        return <FiFile className="text-gray-500" />;
    };

    const handleUpload = (file) => {
        const filePreview = URL.createObjectURL(file);
        const newFile = {
            id: Date.now(),
            name: file.name,
            type: file.type,
            status: 'Uploading...',
            icon: getFileIcon(file.type),
            preview: filePreview,
        };

        setUploadedFiles((prev) => [...prev, newFile]);

        setTimeout(() => {
            setUploadedFiles((prev) =>
                prev.map((f) =>
                    f.id === newFile.id ? { ...f, status: 'Uploaded' } : f
                )
            );
        }, 500);
    };

    const handleDelete = (fileId) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            handleUpload(e.target.files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleUpload(e.dataTransfer.files[0]);
        }
    };

    const formatFileType = (type) => {
        return type.split('/')[1] ? type.split('/')[1].toUpperCase() : 'FILE';
    };

    const handleImageError = (e) => {
        e.target.src = fallbackImage;
    };


    return (
        <div className="max-w-6xl mx-auto p-6">

            <div className="flex flex-col items-center justify-center mb-10">
                <div
                    className={`w-full max-w-md flex flex-col justify-center items-center gap-4 border-2 ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'} px-8 py-12 rounded-lg transition-all duration-200`}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <FiUpload className="text-4xl text-gray-400" />
                    <h1 className="text-2xl font-bold text-gray-800">File Upload</h1>
                    <p className="text-gray-500 text-center">
                        Drag & drop files here <br /> OR
                    </p>
                    <label className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md cursor-pointer transition-colors">
                        Browse Files
                        <input type="file" onChange={handleFileChange} className="hidden" />
                    </label>
                </div>
            </div>


            {uploadedFiles.length > 0 && (
                <div className="mb-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {uploadedFiles.map((file) => (
                            <div
                                key={file.id}
                                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 pt-1">
                                        {file.icon}
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-medium text-gray-900 truncate">
                                                {file.name}
                                            </p>

                                        </div>
                                        <p className="text-xs text-gray-500 mb-2">
                                            {formatFileType(file.type)}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className={`text-xs ${file.status === 'Uploaded' ? 'text-green-600' : 'text-blue-600'}`}>
                                                {file.status}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

   
            {uploadedFiles.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-200 text-center">
                        <h2 className="text-xl font-semibold text-gray-80 ">Uploaded Files</h2>
                    </div>

                    <ul className="divide-y divide-gray-200">
                        {uploadedFiles.map((file) => (
                            <li key={file.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        {file.preview ? (
                                            <img
                                                src={file.preview}
                                                alt="Preview"
                                                className="w-12 h-12 rounded object-cover border border-gray-200"
                                                onError={handleImageError}
                                            />
                                        ) : (
                                            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded border border-gray-200">
                                                {file.icon}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-grow min-w-0">
                                        <div className="flex justify-between items-baseline">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {file.name}
                                            </p>

                                        </div>


                                        <div className="flex justify-between items-center mt-1">
                                            <p className="text-xs">Versatile visuals that complement all file types with creativity and clarity</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleDelete(file.id)}
                                        className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors text-sm"
                                    >
                                        <FiX className="text-base" />
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UploadForm;